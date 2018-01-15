import {
  INPUT_UPDATED,
  USER_SENT_MESSAGE,
} from 'common/actionTypes';

export const ACTION_HANDLERS = {
  [INPUT_UPDATED]: (state, action) =>
    ({ ...state, input: action.payload }),
  [USER_SENT_MESSAGE]: (state, action) =>
    ({ ...state, input: '', messages: [...state.messages, action.payload] }),
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
