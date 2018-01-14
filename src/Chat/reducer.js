export const ACTION_HANDLERS = {
  //
};

const initialState = {
  messages: [],
};

const chatReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default chatReducer;
