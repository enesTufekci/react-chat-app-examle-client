import { internet } from 'faker';
import { v4 } from 'uuid';

const ACTION_HANDLERS = {
  //
};

const initialState = {
  users: [],
  user: {
    nick: internet.username(),
    id: v4(),
  },
};

const appReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default appReducer;
