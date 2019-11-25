import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import App from './component/app';
import { counter } from './redux/reducers';

// 生成一个 store 对象
//  |-  第一次内部会调用 Reducer 函数得到初始 state
const store = createStore(counter);
console.log(store, store.getState());

// 定义 render 函数
function render() {
    ReactDom.render(<App store={store} />, document.getElementById('root'));
}

// 初始化渲染
render();

// 订阅监听（store中状态发生变化，自动重绘）
store.subscribe(render);
