import React, { Component } from 'react';
import Search from './search';
import List from './list';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Search />
                <List />
            </div>
        );
    }
}
