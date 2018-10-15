import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ModelingControlBar from '@/components/modelingControlBar/index'
import ModelingFilter from '@/components/modelingFilter/index'
import ModelingDataTable from '@/components/modelingDataTable/index'

import classNames from 'classnames'
import styles from './index.scss'

class Modeling extends Component{
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.content}>
                    <section className={styles.aside}>
                        <ModelingFilter />
                    </section>
                    <section className={styles.main}>
                        <ModelingDataTable />
                    </section>
                </div>
                <ModelingControlBar />
            </div>
        );
    }
}
export default Modeling;