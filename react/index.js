import React from 'react';
import ReactDOM from 'react-dom';
import store from '../redux/store';
import { Provider } from 'react-redux';

import '../scss/index.scss';

import App from './components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
