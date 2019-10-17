import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Search extends Component {
    static propTypes = {
        setSearchKey: PropTypes.func.isRequired
    };

    search = () => {
        // 获取输入文本
        const searchKey = this.input.value.trim();
        // 调用搜索
        if (searchKey) {
            this.props.setSearchKey(searchKey);
        }
    };
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input
                        type="text"
                        placeholder="enter the name you search"
                        ref={input => (this.input = input)}
                    />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }
}
