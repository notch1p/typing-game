/* eslint-disable */
export default [
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/all",
      "text": "Promise.all()",
      "desc": "Promise.all(iterable) 方法返回一个 Promise 实例，此实例在 iterable 参数内所有的 promise 都“完成（resolved）”或参数中不包含 promise 时回调完成（resolve）；如果参数中  promise 有一个失败（rejected），此实例回调失败（reject），失败原因的是第一个失败 promise 的结果。"
    },
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled",
      "text": "Promise.allSettled()",
      "desc": "该Promise.allSettled()方法返回一个在所有给定的promise已被决议或被拒绝后决议的promise，并带有一个对象数组，每个对象表示对应的promise结果。"
    },
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/any",
      "text": "Promise.any()",
      "desc": "Promise.any() 接收一个Promise可迭代对象，只要其中的一个 promise 完成，就返回那个已经有完成值的 promise 。如果可迭代对象中没有一个 promise 完成（即所有的 promises 都失败/拒绝），就返回一个拒绝的 promise，返回值还有待商榷：无非是拒绝原因数组或AggregateError类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起。本质上，这个方法和Promise.all()是相反的。"
    },
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch",
      "text": "Promise.prototype.catch()",
      "desc": "catch() 方法返回一个Promise，并且处理拒绝的情况。它的行为与调用Promise.prototype.then(undefined, onRejected) 相同。 (事实上, calling obj.catch(onRejected) 内部calls obj.then(undefined, onRejected))."
    },
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally",
      "text": "Promise.prototype.finally()",
      "desc": "返回一个设置了 finally 回调函数的Promise对象。"
    },
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/then",
      "text": "Promise.prototype.then()",
      "desc": "then() 方法返回一个 Promise。它最多需要有两个参数：Promise 的成功和失败情况的回调函数。"
    },
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/race",
      "text": "Promise.race()",
      "desc": "Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。"
    },
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject",
      "text": "Promise.reject()",
      "desc": "Promise.reject()方法返回一个带有拒绝原因的Promise对象。"
    },
    {
      "url": "https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve",
      "text": "Promise.resolve()",
      "desc": "The source for this interactive demo is stored in a GitHub repository. If you'd like to contribute to the interactive demo project, please clone https://github.com/mdn/interactive-examples and send us a pull request."
    }
]
/* eslint-disable */