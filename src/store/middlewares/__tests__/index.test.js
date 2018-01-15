import { userMiddleware } from '../index';

describe('#userMiddleware', () => {
  const user = { nick: 'enes' };
  const initialState = { app: { user } };
  const create = () => {
    const store = {
      getState: jest.fn(() => (initialState)),
      dispatch: jest.fn(),
    };
    const next = jest.fn();

    const invoke = action => userMiddleware(store)(next)(action);

    return { store, next, invoke };
  };
  it('should attach user to action payload', () => {
    const { next, invoke } = create();
    const action = { type: 'TEST', meta: { user: true } };
    const expectedAction = { ...action, payload: { user } };
    invoke(action);
    expect(next).toHaveBeenCalledWith(expectedAction);
  });
});
