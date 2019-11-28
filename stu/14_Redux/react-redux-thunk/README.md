**使用 redux-thunk 进行 redux 异步编程**

[action.js](https://github.com/sAMs126/React-study/blob/master/stu/14_Redux/react-redux-thunk/src/redux/actions.js) 中异步函数返回值为一个方法

```js
/**
 * 异步加
 * @param {number} number action 中携带的值
 */
export const incrementAsync = number => dispatch => {
    // 异步代码
    setTimeout(() => {
        // 1s 后分发一个 加 的 action
        dispatch(increment(number));
    }, 1000);
};
```
