/* 
使用示例: 
const obj = { name: 'xiaohing', age: 28 };
const ob = Observer.getInstance();
const obj1 = ob.setProxy(obj)
ob.on((target, key, value, receiver) => {
    console.log('我变化了', key, value)
})
setTimeout(() => {
    obj1.newProp = '我是新添加的属性';
}, 1000)
*/

class Observer {
    constructor() {
        this.queueObserves = new Set();
    }
    static getInstance() {
        if (!Observer.instance) {
            Observer.instance = new Observer();
        }
        return Observer.instance
    }
    setProxy(payload) {
        return new Proxy(payload, {
            set: (target, key, value, receiver) => {
                const result = Reflect.set(target, key, value, receiver);
                this.emit(target, key, value, receiver);
                return result;
            }
        });
    }
    on(fn) {
        this.queueObserves.add(fn);
    }
    emit(target, key, value, receiver) {
        this.queueObserves.forEach(fn => fn(target, key, value, receiver));
    }
}

module.exports = {
    Observer
}
