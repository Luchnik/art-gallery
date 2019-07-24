import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';

ReactDOM.render(
  <BrowserRouter basename="/store">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
