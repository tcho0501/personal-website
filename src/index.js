import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

ReactDOM.render(
  <HashRouter>
    <Helmet>Tim Cho</Helmet>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
