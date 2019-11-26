/**
|--------------------------------------------------
| 包含所有的 reducer 模块
|--------------------------------------------------
*/

import { INCREMENT, DECREMENT } from './action-types';

/**
 * 加减 reducer
 * @param {number} state 状态值
 * @param {*} action store 中的有效载荷
 */
export function counter(state = 0, action) {
    // console.log('counter()', state, action);
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}
