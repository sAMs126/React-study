import React, { Component } from 'react';
import { INCREMENT, DECREMENT } from '../redux/action-types';

export default class App extends Component {
    state = {
        count: 0
    };

    // 加
    add = () => {
        // 1. 获取增量值(string->number)
        const number = this.select.value * 1;
        // 2. 调用 store 的 dispatch() 更新状态
        this.props.store.dispatch({ type: INCREMENT, data: number });
    };

    // 减
    sub = () => {
        const number = this.select.value * 1;
        this.props.store.dispatch({ type: DECREMENT, data: number });
    };

    // 奇数加
    addIfOdd = () => {
        const number = this.select.value * 1;
        const count = this.props.store.getState();
        if (1 === count % 2) {
            this.props.store.dispatch({ type: INCREMENT, data: number });
        }
    };

    // 异步加
    addAsync = () => {
        const number = this.select.value * 1;
        setTimeout(() => {
            this.props.store.dispatch({ type: INCREMENT, data: number });
        }, 1000);
    };

    render() {
        const count = this.props.store.getState();
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    {/* 使用费受控组 */}
                    <select ref={select => (this.select = select)}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    &nbsp;
                    <button onClick={this.add}>+</button>&nbsp;
                    <button onClick={this.sub}>-</button>&nbsp;
                    <button onClick={this.addIfOdd}>add if odd</button>&nbsp;
                    <button onClick={this.addAsync}>add async</button>
                </div>
            </div>
        );
    }
}
