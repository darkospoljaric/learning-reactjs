import React from 'react';
import ReactDOM from 'react-dom';

// import { data } from './data';

import BookList from './components/BookList';
import configureStore from './store';

const store = configureStore();
ReactDOM.render(
  <BookList store={store} />,
  document.getElementById('root')
);
