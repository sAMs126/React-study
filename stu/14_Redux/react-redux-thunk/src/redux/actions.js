/**
|--------------------------------------------------
| 包含所有的 action creator
| - 同步的 action 返回的是一个对象
| - 异步的 action 返回的是一个函数
|--------------------------------------------------
*/
import { DECREMENT, INCREMENT } from './action-types';

/**
 * 加
 * @param {number} number action 中携带的值
 */
export const increment = number => ({
    type: INCREMENT,
    data: number
});

/**
 * 减
 * @param {number} number action 中携带的值
 */
export const decrement = number => ({
    type: DECREMENT,
    data: number
});

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
