/**
|--------------------------------------------------
| 包含所有的 action creator
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
