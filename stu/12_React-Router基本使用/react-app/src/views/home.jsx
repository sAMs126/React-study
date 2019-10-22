import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import MyNavLink from '../component/my-nav-link';

import News from './news';
import Messages from './messages';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>This is home route component</h2>
                {/* 引入嵌套路由 */}
                <ul className="nav nav-tabs">
                    <li>
                        <MyNavLink to="/home/news">News</MyNavLink>
                    </li>
                    <li>
                        <MyNavLink to="/home/messages">Messages</MyNavLink>
                    </li>
                </ul>
                {/* 显示路由组件 */}
                <Switch>
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/messages" component={Messages}></Route>
                    <Redirect to="/home/news"/>
                </Switch>
            </div>
        );
    }
}
