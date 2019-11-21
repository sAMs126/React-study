import React, { Component } from 'react';

export default class App extends Component {
    state = {
        count: 0
    };

    render() {
        const { count } = this.state;
        return (
            <div>
                <p>click {count} times</p>
                <div>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    &nbsp;
                    <button>+</button>&nbsp;
                    <button>-</button>&nbsp;
                    <button>add if odd</button>&nbsp;
                    <button>add async</button>
                </div>
            </div>
        );
    }
}
