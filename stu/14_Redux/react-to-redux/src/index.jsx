import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app';
import store from './redux/store';

// 定义 render 函数
function render() {
    ReactDom.render(<App store={store} />, document.getElementById('root'));
}

// 初始化渲染
render();

// 订阅监听（store中状态发生变化，自动重绘）
store.subscribe(render);
