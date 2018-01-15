/* eslint-disable */
export const userMiddleware = store => next => (action) => {
  if (action.meta && action.meta.user) {
    const { user } = store.getState().app;
    return next({ ...action, payload: { ...action.payload, user } });
  }
  return next(action);
};

