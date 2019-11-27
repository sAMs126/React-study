import { createStore } from 'redux';
import { counter } from './reducers';

// 生成一个 store 对象
//  |-  第一次内部会调用 Reducer 函数得到初始 state
const store = createStore(counter);
// console.log(store, store.getState());

export default store;
