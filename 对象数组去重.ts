/**
 * Created by mac on 2021-04-11 21:17
 */
declare interface ListItem {
  [prop: string]: any;
}

const removeDuplicate = (list: Array<ListItem>, key: string) => {
  return list.reduce((arr = [], cur: ListItem) => {
    const res = arr.find(item => item[key] === cur[key])
    !res && arr.push(cur)
    return arr
  }, [])
}


export {
  removeDuplicate
}
