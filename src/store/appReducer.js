import { internet } from 'faker';
import { v4 } from 'uuid';

import {
  USER_LIST_UPDATED,
  USER_SENT_MESSAGE,
  USER_NICK_UPDATED,
  IS_TYPING_SIGNAL_RECEIVED,
  IS_NOT_TYPING_SIGNAL_RECEIVED,
} from 'common/actionTypes';

const ACTION_HANDLERS = {
  [USER_LIST_UPDATED]: (state, action) =>
    ({ ...state, users: [...action.payload] }),
  [USER_SENT_MESSAGE]: (state, action) =>
    ({ ...state, user: { ...state.user, lastMessageId: action.payload.uuid } }),
  [USER_NICK_UPDATED]: (state, action) =>
    ({ ...state, user: { ...state.user, nick: action.payload.newNick } }),
  [IS_TYPING_SIGNAL_RECEIVED]: (state, action) => {
    const updatedUsers = state.users.map((user) => {
      if (user.id === action.payload) {
        return { ...user, isTyping: true };
      }
      return user;
    });
    return { ...state, users: updatedUsers };
  },
  [IS_NOT_TYPING_SIGNAL_RECEIVED]: (state, action) => {
    const updatedUsers = state.users.map((user) => {
      if (user.id === action.payload) {
        return { ...user, isTyping: false };
      }
      return user;
    });
    return { ...state, users: updatedUsers };
  },
};

const initialState = {
  users: [],
  user: {
    nick: internet.userName(),
    id: v4(),
    lastMessageId: undefined,
  },
};

const appReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default appReducer;
