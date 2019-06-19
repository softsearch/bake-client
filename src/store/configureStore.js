import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import rootReducers from '../reducers/index';

const logger = createLogger({
  collapsed: true
});

const configureStoreDevelopment = (initialState) => {
  const middleware = [thunk, logger];
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(rootReducers, initialState, composeEnhancer(applyMiddleware(...middleware)));
};

const configureStoreProduction = (initialState) => {
  const middleware = [thunk];

  return createStore(initialState, applyMiddleware(...middleware));
};

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProduction : configureStoreDevelopment;

export default configureStore;
