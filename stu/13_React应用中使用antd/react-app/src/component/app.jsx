import React, { Component } from 'react';
import { Button, Toast } from 'antd-mobile';

export default class App extends Component {

    handleClick = () => {
        Toast.info('This is a toast tips !!!');
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick}>Start</Button>
            </div>
        );
    }
}
