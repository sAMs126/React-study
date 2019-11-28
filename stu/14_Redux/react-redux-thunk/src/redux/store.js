import { createStore, applyMiddleware } from 'redux';
import { counter } from './reducers';
import thunk from 'redux-thunk';

// 生成一个 store 对象
//  |-  第一次内部会调用 Reducer 函数得到初始 state
const store = createStore(
    counter,
    // 应用上异步中间件
    applyMiddleware(thunk)
);
// console.log(store, store.getState());

export default store;
