import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";

import HeaderAvatar from '@/components/headerAvatar/index'
import HeaderMenu from   '@/components/headerMenu/index'
import Modeling from '@/pages/Modeling/index'
import { Layout, Breadcrumb } from 'antd';

import classNames from 'classnames'
import styles from './index.scss'


const { Header, Content, Footer } = Layout;
class Index extends Component{
    render() {
        return (
            <Layout className={classNames('layout', styles.layout)}>
                <Header>
                    <div className={classNames(styles.leftSide)}>
                        <div className={classNames(styles.logo)}>
                            <img src={require('@/asset/favicon.ico')} alt=""/>
                        </div>
                        <HeaderMenu/>
                    </div>
                    <div className={classNames(styles.rightSide)}>
                        <div className="user">
                            <HeaderAvatar />
                        </div>
                    </div>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb className={styles.breadcrumb} style={{ margin: '16px 0' }}>
                        <Route path="/" render={() => (
                            <Breadcrumb.Item>Home</Breadcrumb.Item>)}
                        />
                        <Route path="/modeling" render={() => (
                                <Breadcrumb.Item>Modeling</Breadcrumb.Item>)}
                        />
                        <Route path="/forecast" render={() => (
                            <Breadcrumb.Item>Forecast</Breadcrumb.Item>)}
                        />
                        <Route path="/systemConf" render={() => (
                            <Breadcrumb.Item>SystemConf</Breadcrumb.Item>)}
                        />
                    </Breadcrumb>
                    <div className={styles.mainContainer}>
                        <Route exact path="/modeling" component={Modeling} />
                        <Route path="/forecast" component={HeaderAvatar} />
                        <Route path="/systemConf" component={HeaderAvatar} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Rua Design ©2018 Created by MOYU
                </Footer>
            </Layout>
        );
    }
}
export default Index;