import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import { BrowserRouter as Router } from "react-router-dom";
import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CoreLayout>
          <Routes />
      </CoreLayout>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
