/**
|--------------------------------------------------
| 包含所有的 reducer 模块(根据老的 state 和 action 返回一个新的 state)
|--------------------------------------------------
*/
import { ADD_COMMENT, DEL_COMMENT, RCV_COMMENTS } from './action-types';

/** 操作评论 */
export function comments(state = [], action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state];
        case DEL_COMMENT:
            // debugger;
            return state.filter((comment, index) => index !== action.data);
        case RCV_COMMENTS:
            return action.data;
        default:
            return state;
    }
}
