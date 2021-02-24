// 找出原型链上的所有可枚举属性和方法
function findMembers (obj, ...args) {
  return (function innerFind (newobj) {
    if (newobj.__proto__ === null) {
      return [];
    }
    const props = Object.getOwnPropertyNames(newobj);
    let arr = [];
    args.forEach(item => {
      const newVals = props.filter(property => property.startsWith(item));
      newVals.length && (arr = arr.concat(newVals));
    });
    return [...arr, ...innerFind(newobj.__proto__)];
  })(obj);
}
