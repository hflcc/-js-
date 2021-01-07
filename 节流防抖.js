/**
 * Created by mac on 2021-01-07 13:18
 */
/*
* @info 防抖, 一般用在输入框连续输入值时, 防止频繁调用接口
* */
function debounce(fn = () => {}, delay = 500) {
  let timer = null
  return function () {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

/*
* @info 节流 例如拖拽, 无论拖拽速度有多快, 都会每隔100ms触发一次
* */
function throttle(fn = () => {}, delay = 100) {
  let timer = null
  return function () {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}