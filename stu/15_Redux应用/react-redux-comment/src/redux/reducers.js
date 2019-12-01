/**
|--------------------------------------------------
| 包含所有的 reducer 模块(根据老的 state 和 action 返回一个新的 state)
|--------------------------------------------------
*/
import { ADD_COMMENT, DEL_COMMENT } from './action-types';

/** 初始化 state 数组 */
const initComments = [
    { username: 'Tom', content: 'heroic crab mam' },
    { username: 'Mack', content: 'mal dual swig' }
];

/** 操作评论 */
export function comments(state = initComments, action) {
    switch (action.type) {
        case ADD_COMMENT:
            return [action.data, ...state];
        case DEL_COMMENT:
            // debugger;
            return state.filter((comment, index) => index !== action.data);
        default:
            return state;
    }
}
