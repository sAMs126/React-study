import React, { Component } from 'react';

export default class Messages extends Component {
    state = {
        messages: []
    };

    componentDidMount() {
        // 假设发送ajax请求
        setTimeout(() => {
            const messages = [
                { id: '1', title: 'message001' },
                { id: '2', title: 'message002' },
                { id: '3', title: 'message003' }
            ];
            // 更新到state中
            this.setState({
                messages
            });
        }, 1000);
    }

    render() {
        return (
            <ul>
                {this.state.messages.map((message, index) => (
                    <li key={index}>
                        <a href="#">{message.title}</a>
                    </li>
                ))}
            </ul>
        );
    }
}
