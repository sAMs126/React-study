import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import App from './component/app';
import { counter } from './redux/reducers';


// 生成一个 store 对象
//  |-  第一次内部会调用 Reducer 函数得到初始 state
const store = createStore(counter);
console.log(store);

ReactDom.render(<App />, document.getElementById('root'));
