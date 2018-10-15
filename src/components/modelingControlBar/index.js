import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Button, Icon } from 'antd';

// import classNames from 'classnames'
import styles from './index.scss'

const ButtonGroup = Button.Group;
class modelingControlBar extends Component{
    render() {
        return (
            <div className={styles.controlBar}>
                <Button className={'btnItem'}>
                    取消<Icon type="close" theme="outlined" /></Button>
                <ButtonGroup className={'btnItem'}>
                    <Button type="primary">
                        <Icon type="left" />上一步
                    </Button>
                    <Button type="primary">
                        下一步<Icon type="right" />
                    </Button>
                </ButtonGroup>
                <Button className={'btnItem'}>
                    完成<Icon type="check" theme="outlined" />
                </Button>
            </div>
        );
    }
}
export default modelingControlBar;