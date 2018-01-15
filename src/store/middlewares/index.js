export const userMiddleware = store => next => (action) => {
  if (action.meta && action.meta.user) {
    const { user } = store.getState().app;
    return next({ ...action, payload: { ...action.payload, user } });
  }
  return next(action);
};

export const uuidMiddleware = v4 => () => next => (action) => {
  if (action.meta && action.meta.uuid) {
    return next({ ...action, payload: { ...action.payload, uuid: v4() } });
  }
  return next(action);
};
