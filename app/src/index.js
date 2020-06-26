import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/reducer';
import logger from 'redux-logger';

import App from './App';

// const loggers = ({ getState }) => next => action => {
//   console.log("Dispatching action:", action);
//   next(action);
// };

// const store = createStore(appReducer, applyMiddleware(logger, thunk));
// const store = createStore(appReducer, applyMiddleware(thunk));
const store = createStore(appReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>,
  
  document.getElementById('root')
);
