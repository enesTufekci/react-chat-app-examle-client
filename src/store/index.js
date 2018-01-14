import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
/* eslint-disable import/no-extraneous-dependencies */
import { devToolsEnhancer } from 'redux-devtools-extension';

import appReducer from './appReducer';
import { loadState, saveState } from './localStorage';

const configureStore = () => {
  let enhancers = [];
  const persistedState = { ...loadState('state') };
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
    { ...persistedState },
    compose(applyMiddleware(...middlewares), ...enhancers),
  );

  store.subscribe(() => {
    saveState({
      app: store.getState().app,
    });
  });

  store.dispatch({
    type: 'INIT',
  });

  return store;
};

export default configureStore();
