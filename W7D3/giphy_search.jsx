import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from './store/store';
import Root from './components/root';
import APIUtil from './util/api_util';
import {receiveSearchGiphys, fetchSearchGiphys} from './actions/giphy_actions';

document.addEventListener('DOMContentLoaded', () => {
  console.log(configureStore);
  console.log(Root);
  console.log(APIUtil);
  const store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} /> ,root);

  window.store = store;
  window.receiveSearchGiphys = receiveSearchGiphys;
  window.fetchSearchGiphys = fetchSearchGiphys;
});
