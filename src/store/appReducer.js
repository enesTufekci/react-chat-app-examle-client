import { internet } from 'faker';
import { v4 } from 'uuid';

import {
  USER_LIST_UPDATED,
  USER_SENT_MESSAGE,
  USER_NICK_UPDATED,
} from 'common/actionTypes';

const ACTION_HANDLERS = {
  [USER_LIST_UPDATED]: (state, action) =>
    ({ ...state, users: [...action.payload] }),
  [USER_SENT_MESSAGE]: (state, action) =>
    ({ ...state, user: { ...state.user, lastMessageId: action.payload.uuid } }),
  [USER_NICK_UPDATED]: (state, action) =>
    ({ ...state, user: { ...state.user, nick: action.payload.newNick } }),
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
