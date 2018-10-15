import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './route/index';
// import Index from './views/index';
// import About from './components/About';
// import Test from './components/test';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <App />
), document.getElementById('root'));
registerServiceWorker();