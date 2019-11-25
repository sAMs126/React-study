import React, { Component } from 'react';

export default class App extends Component {
    state = {
        count: 0
    };

    add = () => {
        // 1.获取增量值(string->number)
        const number = this.select.value * 1;
        // 2.获取 count 当前值,并计算
        const count = this.state.count + number;
        // 3.更新 count 值
        this.setState({
            count
        });
    };

    sub = () => {
        const number = this.select.value * 1;
        const count = this.state.count - number;
        this.setState({
            count
        });
    };

    addIfOdd = () => {
        const number = this.select.value * 1;
        const count = this.state.count;
        if (1 === count % 2) {
            this.setState({
                count: count + number
            });
        }
    };

    addAsync = () => {
        const number = this.select.value * 1;
        const count = this.state.count + number;
        setTimeout(() => {
            this.setState({ count });
        }, 1000);
    };

    render() {
        const { count } = this.state;
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
