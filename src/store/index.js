import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
/* eslint-disable import/no-extraneous-dependencies */
import { devToolsEnhancer } from 'redux-devtools-extension';

import appReducer from './appReducer';

const configureStore = () => {
  let enhancers = [];
  const middlewares = [];

  if (process.env.NODE_ENV === 'development') {
    enhancers = [
      devToolsEnhancer(),
      ...enhancers,
    ];
  }

  const store = createStore(
    combineReducers({
      app: appReducer,
    }),
    compose(applyMiddleware(...middlewares), ...enhancers),
  );

  return store;
};

export default configureStore();
