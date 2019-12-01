/**
|--------------------------------------------------
| 包含所有的 action creator (action 的工厂函数)
|--------------------------------------------------
*/
import { ADD_COMMENT, DEL_COMMENT, RCV_COMMENTS } from './action-types';

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

/** 同步接收数据 */
const rcvComments = comments => ({
    type: RCV_COMMENTS,
    data: comments
});

/** 异步获取数据 */
export const getComments = () => {
    return dispatch => {
        // 模拟发送获取数据
        setTimeout(() => {
            const initComments = [
                { username: 'Tom', content: 'heroic crab mam' },
                { username: 'Mack', content: 'mal dual swig' }
            ];
            dispatch(rcvComments(initComments));
        }, 1000);
    };
};
