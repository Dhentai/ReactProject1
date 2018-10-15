import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Checkbox, Select, Input } from 'antd';

// import classNames from 'classnames'
import styles from './index.scss'

const CheckboxGroup = Checkbox.Group;
const Option = Select.Option;
const plainOptions = [
        { label: '第一行是标题', value: '1' },
        { label: '如果字段串外有引号则先剥离，包括标题部分', value: '2' },
        { label: '检查数据合法性（列数是否一致）', value: '3' },
    ];
const defaultCheckedList = ['1', '2', '3'];

const seletorOptions = [
        {
            label: '字符分割段',
            id: '0',
            disable: true,
            options: ['rua', 'nmsl', 'rsndm']
        }, {
            label: '字符集',
            id: '1',
            options: ['fnndp', 'nmsl', 'rsndm']
        },{
            label: '日期格式',
            id: '4',
            options: ['cmn', 'nmsl', 'rsndm']
        },{
            label: '时间格式',
            id: '5',
            options: ['quin', 'nmsl', 'rsndm']
        },{
            label: '日期时间格式',
            id: '6',
            options: ['1', '2', '3']
        }
    ];

class ModelingFilter extends Component{
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };
    onChange = (checkedList) => {
        this.setState({
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    };
    onCheckAllChange = (e) => {
        this.setState({
            checkedList: e.target.checked ? plainOptions.map((item) => item.value) : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    };
    handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.top}>
                    <div style={{ borderBottom: '1px solid #E9E9E9' }}>
                        <Checkbox
                            indeterminate={this.state.indeterminate}
                            onChange={this.onCheckAllChange}
                            checked={this.state.checkAll}
                        >
                            选择全部
                        </Checkbox>
                    </div>
                    <br />
                    <CheckboxGroup options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                </div>
                <div className={styles.bottom}>
                    {seletorOptions.map((item, index) =>
                        <div key={item.id} className={styles.selectorItem}>
                            <span className={styles.itemLabel}>{item.label}：</span>
                            <Select className={styles.selector}  disabled={item.disable} defaultValue={item.options[0]} onChange={this.handleChange}>
                                {item.options.map((item, index) => (
                                    <Option key={index} value={item}>{item}</Option>
                                ))}
                            </Select>
                        </div>
                    )}
                </div>
                <div className={styles.inputItem}>
                    <span>缺失值（竖线分割）</span>
                    <Input placeholder="Basic usage" />
                </div>
            </div>
        );
    }
}
export default ModelingFilter;