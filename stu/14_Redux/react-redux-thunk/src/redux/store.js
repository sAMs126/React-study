import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { counter } from './reducers';

// 生成一个 store 对象
//  |-  第一次内部会调用 Reducer 函数得到初始 state
const store = createStore(
    counter,
    // 应用上异步中间件
    composeWithDevTools(applyMiddleware(thunk))
);
// console.log(store, store.getState());

export default store;
