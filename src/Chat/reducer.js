import {
  INPUT_UPDATED,
  USER_SENT_MESSAGE,
  USER_CONNECTED,
  USER_RECEIVED_MESSAGE,
} from 'common/actionTypes';

export function connectUser() {
  return {
    type: USER_CONNECTED,
    meta: {
      socket: true,
      user: true,
    },
  };
}

export const ACTION_HANDLERS = {
  [INPUT_UPDATED]: (state, action) =>
    ({ ...state, input: action.payload }),
  [USER_SENT_MESSAGE]: (state, action) =>
    ({ ...state, input: '', messages: [...state.messages, action.payload] }),
  [USER_RECEIVED_MESSAGE]: (state, action) =>
    ({ ...state, messages: [...state.messages, action.payload] }),
};

const initialState = {
  input: '',
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default chatReducer;
