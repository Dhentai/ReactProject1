import React, { Component } from "react";

import { Avatar } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';

// import classNames from 'classnames'
import styles from './index.scss'

class HeaderAvator extends Component{
     menu = (
        <Menu className={styles.dropdownenu}>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                    <Icon type="home" /><span>个人中心</span>
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                    <Icon type="home" /><span>个人设置</span>
                </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    <Icon type="home" /><span>个人个人</span>
                </a>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
                    <Icon type="home" /><span>退出登录</span>
                </a>
            </Menu.Item>
        </Menu>
    )
    render() {
        return (
            <Dropdown overlay={this.menu}>
                <div className={styles.container}>
                    <Avatar className={styles.avatar} icon="user" />
                    <span className={styles.name}>rua</span>
                </div>
            </Dropdown >
        );
    }
}
export default HeaderAvator;