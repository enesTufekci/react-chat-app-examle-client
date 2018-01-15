import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
/* eslint-disable import/no-extraneous-dependencies */
import { devToolsEnhancer } from 'redux-devtools-extension';
import { v4 } from 'uuid';
import moment from 'moment';
import appReducer from './appReducer';
import chatReducer from '../Chat/reducer';

import { loadState, saveState } from './localStorage';
import { userMiddleware, dateMiddleware, uuidMiddleware } from './middlewares';
import socketMiddleware from './middlewares/socketMiddleware';

const configureStore = () => {
  let enhancers = [];
  const persistedState = { ...loadState('state') };
  const middlewares = [
    userMiddleware,
    uuidMiddleware(v4),
    dateMiddleware(() => moment().format('DD.MM.YYYY, h:mm:ss a')),
  ];

  if (process.env.NODE_ENV === 'development') {
    enhancers = [
      devToolsEnhancer(),
      ...enhancers,
    ];
  }

  if (process.env.NODE_ENV !== 'test') {
    middlewares.push(socketMiddleware({
      url: process.env.REACT_APP_SOCKET_URL,
    }));
  }

  const store = createStore(
    combineReducers({
      app: appReducer,
      chat: chatReducer,
    }),
    { ...persistedState },
    compose(applyMiddleware(...middlewares), ...enhancers),
  );

  store.subscribe(() => {
    saveState({
      app: store.getState().app,
      chat: store.getState().chat,
    });
  });

  store.dispatch({
    type: 'INIT',
  });

  return store;
};

export default configureStore();
