import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import MsgDetail from './msg-detail';
import MyNavLink from '../component/my-nav-link';

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
            <div>
                <ul>
                    {this.state.messages.map((message, index) => (
                        <li key={index}>
                            {/* 非路由链接 */}
                            {/* <a href={`/home/messages/${message.id}`}>{message.title}</a> */}
                            {/* 路由连接 */}
                            <MyNavLink to={`/home/messages/${message.id}`}>
                                {message.title}
                            </MyNavLink>
                        </li>
                    ))}
                </ul>
                <Route path="/home/messages/:id" component={MsgDetail}></Route>
            </div>
        );
    }
}
