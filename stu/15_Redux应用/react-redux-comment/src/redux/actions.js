/**
|--------------------------------------------------
| 包含所有的 action creator (action 的工厂函数)
|--------------------------------------------------
*/
import { ADD_COMMENT, DEL_COMMENT } from './action-types';

/** 同步添加 */
export const addComment = comment => ({
    type: ADD_COMMENT,
    data: comment
});

/** 同步删除 */
export const deleteComment = index => ({
    type: DEL_COMMENT,
    data: index
});
