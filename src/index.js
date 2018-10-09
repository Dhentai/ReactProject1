import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Index from './views/index';
import About from './components/About';
import Test from './components/test';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Test/>
), document.getElementById('root'));
registerServiceWorker();