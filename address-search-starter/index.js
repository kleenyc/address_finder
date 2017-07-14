/* global window, document */

// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import AddressFinderApp from './components/AddressFinderApp';


const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());


const render = () => ReactDOM.render(
	<Provider store={store}>
	  <AddressFinderApp/>
	</Provider>,
  document.getElementById('root')
);

render();
store.subscribe(render)
