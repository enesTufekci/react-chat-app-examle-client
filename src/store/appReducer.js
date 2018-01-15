import { internet } from 'faker';
import { v4 } from 'uuid';

import { USER_LIST_UPDATED } from 'common/actionTypes';

const ACTION_HANDLERS = {
  [USER_LIST_UPDATED]: (state, action) =>
    ({ ...state, users: [...action.payload] }),
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
