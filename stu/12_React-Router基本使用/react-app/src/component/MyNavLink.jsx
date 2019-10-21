import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
    render() {
        /* {...this.props} 将外部传入所有属性值传递给 NavLink */
        return <NavLink {...this.props} activeClassName="activeClass"></NavLink>;
    }
}
