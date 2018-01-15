import {
  USER_CONNECTED,
  INPUT_UPDATED,
  USER_SENT_MESSAGE,
} from 'common/actionTypes';

import chatReducer, { connectUser } from '../reducer';

const initialState = {
  input: '',
  messages: [],
};

describe('#chatReducer', () => {
  it('should return initial state', () => {
    expect(chatReducer(undefined, {})).toEqual(initialState);
  });
  it('should handle INPUT_UPDATED', () => {
    const input = 'input';
    const action = {
      type: INPUT_UPDATED,
      payload: input,
    };
    const expectedState = {
      ...initialState,
      input,
    };
    expect(chatReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle USER_SENT_MESSAGE', () => {
    const message = 'message';
    const action = {
      type: USER_SENT_MESSAGE,
      payload: message,
    };
    const expectedState = {
      ...initialState,
      messages: [message],
    };
    expect(chatReducer(initialState, action)).toEqual(expectedState);
  });
});

describe('#connectUser', () => {
  it('should create connect user action', () => {
    const expectedAction = {
      type: USER_CONNECTED,
      meta: {
        socket: true,
        user: true,
      },
    };
    expect(connectUser()).toEqual(expectedAction);
  });
});

