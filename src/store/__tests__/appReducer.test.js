import {
  USER_LIST_UPDATED,
  USER_SENT_MESSAGE,
  USER_NICK_UPDATED,
} from 'common/actionTypes';
import appReducer from '../appReducer';

describe('#appReducer', () => {
  const initialState = {
    user: { nick: 'enes', lastMessageId: 1 },
    users: ['enes', 'foo', 'bar'],
  };
  it('should return state', () => {
    const action = {
      type: 'UNDEFINED_ACTION',
    };
    expect(appReducer(initialState, action)).toEqual(initialState);
  });

  it('should handle USER_LIST_UPDATED', () => {
    const action = {
      type: USER_LIST_UPDATED,
      payload: ['enes', 'foo', 'bar', 'newUser'],
    };
    const expectedState = {
      ...initialState,
      users: ['enes', 'foo', 'bar', 'newUser'],
    };
    expect(appReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle USER_SENT_MESSAGE', () => {
    const message = { text: 'hello', uuid: '1000-2000' };
    const expectedState = {
      ...initialState,
      user: { ...initialState.user, lastMessageId: message.uuid },
    };
    const action = {
      type: USER_SENT_MESSAGE,
      payload: message,
    };
    expect(appReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle USER_NICK_UPDATED', () => {
    const newNick = 'newNick';
    const action = {
      type: USER_NICK_UPDATED,
      payload: {
        newNick,
      },
    };
    const expectedState = {
      ...initialState,
      user: { ...initialState.user, nick: newNick },
    };
    expect(appReducer(initialState, action)).toEqual(expectedState);
  });
});
