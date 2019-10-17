import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Axios from 'axios';

export default class List extends Component {
    static propTypes = {
        searchKey: PropTypes.string.isRequired
    };

    state = {
        // 是否显示初始页面
        initView: true,
        // 是否显示加载信息
        loading: false,
        // 获得用户列表
        users: null,
        // 请求错误时返回信息
        errorMsg: null
    };

    // 在组件被更新后调用
    componentDidUpdate(prevProps, prevState) {
        const { searchKey } = this.props;
        // 典型用法（不要忘记比较 props）：
        if (searchKey !== prevProps.searchKey) {
            // 更新状态为 -> 请求中
            this.setState({
                initView: false,
                loading: true
            });
            //  发送请求
            const url = `https://api.github.com/search/users?q=${searchKey}`;
            Axios.get(url)
                .then(response => {
                    // 获取响应数据
                    const res = response.data;
                    const users = res.items.map(user =>
                        // 让程序理解返回的是个对象结构，在大括号{}外层再加一层小括号()
                        ({ name: user.login, url: user.html_url, avatarUrl: user.avatar_url })
                    );
                    // 更新状态为 -> 成功
                    this.setState({ loading: false, users });
                })
                .catch(error => {
                    // 更新状态为 -> 失败
                    this.setState({ loading: false, errorMsg: error.message });
                });
        }
    }

    render() {
        const { initView, loading, users, errorMsg } = this.state;
        if (initView) {
            return <h2>请输入用户名进行搜索</h2>;
        } else if (loading) {
            return <h2>正在请求中...</h2>;
        } else if (errorMsg) {
            return <h2>{errorMsg}</h2>;
        } else {
            return (
                <div className="row">
                    {users.map((user, index) => (
                        <div className="card" key={index}>
                            <a href={user.url} target="_blank" rel="noopener noreferrer">
                                <img src={user.avatarUrl} alt={user.name} style={{ width: 100 }} />
                            </a>
                            <p className="card-text">{user.name}</p>
                        </div>
                    ))}
                </div>
            );
        }
    }
}
