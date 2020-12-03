import { combineReducers, applyMiddleware, createStore } from 'redux';
import { loginReducer } from './reducers/login-reducer.js';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

let reducers = combineReducers({ loginReducer });
let store = createStore(
  reducers,
  applyMiddleware(logger, thunk)
);

export default store;
