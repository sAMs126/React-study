import React, { Component } from 'react';

export default class MsgDetail extends Component {
    state = {
        messages: [
            { id: '1', title: 'message001', content: 'hello world 001' },
            { id: '2', title: 'message002', content: 'hello world 002' },
            { id: '3', title: 'message003', content: 'hello world 003' }
        ]
    };

    render() {
        const { id } = this.props.match.params;
        const { messages } = this.state;
        // 从messages获取指定对象
        const message = messages.find(m => m.id === id);
        return (
            <ul>
                <li>ID: {message.id}</li>
                <li>TITLE: {message.title}</li>
                <li>CONTENT: {message.content}</li>
            </ul>
        );
    }
}
