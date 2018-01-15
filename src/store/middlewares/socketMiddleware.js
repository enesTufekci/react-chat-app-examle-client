import io from 'socket.io-client';
import * as socketEvents from 'common/actionTypes';

const initiateSocket = (url, store) => {
  const socket = io(url, { query: `userId=${store.getState().app.user.id}` });
  Object.keys(socketEvents).forEach((key) => {
    const event = socketEvents[key];
    socket.on(event, (payload) => {
      store.dispatch({ type: event, payload });
    });
  });

  return socket;
};

const socketMiddleware = config => (store) => {
  const socket = initiateSocket(config.url, store);
  return next => (action) => {
    if (action.meta && action.meta.socket) {
      socket.emit(action.type, action.payload);
    }
    return next(action);
  };
};


export default socketMiddleware;
