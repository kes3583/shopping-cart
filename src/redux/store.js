import { createStore, applyMiddleware } from "redux";
import {reducers, INITIAL_STATE} from './reducers';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const logger = createLogger(); 
const middlware = [logger, ReduxThunk]

const store = createStore(
  reducers,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middlware)),
);

export default store;