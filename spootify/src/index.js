import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from './routes';
import CoreLayout from './common/layouts/CoreLayout';
import { store } from "./store";

import './styles/_main.scss';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <CoreLayout>
            <Routes />
        </CoreLayout>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
