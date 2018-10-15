import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { InputNumber, Icon, Table } from 'antd';


// import classNames from 'classnames'
import styles from './index.scss'

const columns = [{
    title: 'Name',
    dataIndex: 'name',
    width: 150,
}, {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
}, {
    title: 'Address',
    dataIndex: 'address',
    width: 250,
}, {
    title: 'Nm$l',
    dataIndex: 'nmsl',
    width: 150,
}, {
    title: 'Waht',
    dataIndex: 'rua',
    width: 150,
}, {
    title: '社保',
    dataIndex: 'sb',
    width: 150,
}];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        nmsl: 'fnndp',
        rua: 'waht?',
        sb: 'ztmjlwc'
    });
}

class ModelingDataTable extends Component{
    state = {
        tableHeight: 100
    };
    onChange = (value) => {
        console.log('changed', value);
    };
    componentDidMount() {
        // this.tableHeight = document.querySelector('.' + styles.tableContent).clientHeight
        let height = document.querySelector(`.${styles.container}`).clientHeight -
            document.querySelector(`.${styles.header}`).clientHeight -
            document.querySelector('.ant-table-header').clientHeight;
        this.setState({ 'tableHeight': height} );
    };
    render(){
        const {tableHeight} = this.state;
        return (
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.leftSide}>
                        <span>预览数据</span>
                    </div>
                    <div className={styles.rightSide}>
                        <div className={styles.tableFilter}>
                            <span>显示前</span>
                            <InputNumber min={1} max={100} defaultValue={3} onChange={this.onChange} />
                        </div>
                        <span><Icon type="reload" theme="outlined" />重载</span>
                    </div>
                </div>
                <div className={styles.tableContent}>
                    <Table columns={columns}
                           dataSource={data}
                           pagination={false}
                           scroll={{ y: tableHeight }}
                    />
                </div>
            </div>
        );
    }
}
export default ModelingDataTable;