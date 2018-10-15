import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import { Menu } from 'antd';

// import classNames from 'classnames'

class HeaderMenu extends Component{
    render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1"><Link to="/modeling">建模</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/forecast">预测</Link></Menu.Item>
                <Menu.Item key="3"><Link to="/systemConf">系统配置</Link></Menu.Item>
            </Menu>
        );
    }
}
export default HeaderMenu;