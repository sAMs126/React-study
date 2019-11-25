/**
|--------------------------------------------------
| 包含 N 个 reducer 模块
|--------------------------------------------------
*/

import { INCREMENT, DECREMENT } from './action-types';

/**
 * 加减 reducer
 * @param {number} state
 * @param {*} action
 */
export function counter(state = 0, action) {
    console.log('counter()', state, action);
    switch (action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}
