import React, { Component } from 'react';
import Search from './search';
import List from './list';

export default class App extends Component {
    // 兄弟组件间传值，通过共同父组件进行传递
    state = {
        searchKey: ''
    };

    setSearchKey = searchKey => {
        // this.searchKey = searchKey;
        this.setState({searchKey})
    };
    render() {
        return (
            <div className="container">
                <Search setSearchKey = {this.setSearchKey}/>
                <List searchKey={this.state.searchKey}/>
            </div>
        );
    }
}
