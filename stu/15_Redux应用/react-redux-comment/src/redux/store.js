/**
|--------------------------------------------------
| redux 核心的管理对象
|--------------------------------------------------
*/
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { comments } from './reducers';

// 生成一个 store 对象
const store = createStore(comments, composeWithDevTools(applyMiddleware(thunk)));

export default store;
