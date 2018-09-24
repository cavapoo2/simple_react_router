import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import { Title, List } from './App';

ReactDOM.render(
    <Router >
        <div>
            <Route exact path="/" component={Title} />
            <Route path="/list" component={List} />

        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
