import {
  USER_CONNECTED,
  INPUT_UPDATED,
  USER_SENT_MESSAGE,
  USER_RECEIVED_MESSAGE,
  INPUT_MODE_SWITCHED,
  USER_NICK_UPDATED,
  USER_THINKED,
  USER_OOPSED,
} from 'common/actionTypes';

import chatReducer, { connectUser } from '../reducer';

const initialState = {
  input: '',
  inputMode: 'normal',
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

  it('should handle USER_RECEIVED_MESSAGE', () => {
    const message = 'message';
    const action = {
      type: USER_RECEIVED_MESSAGE,
      payload: message,
    };
    const expectedState = {
      ...initialState,
      messages: [message],
    };
    expect(chatReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle INPUT_MODE_SWITCHED', () => {
    const mode = 'command';
    const action = {
      type: INPUT_MODE_SWITCHED,
      payload: mode,
    };
    const expectedState = {
      ...initialState,
      inputMode: mode,
    };
    expect(chatReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle reset input mode to normal after command execution', () => {
    const stateWhileWritingCommand = {
      messages: [],
      input: '/test',
      inputMode: 'command',
    };
    const expectedStateAfterCommandExecution = {
      ...stateWhileWritingCommand,
      inputMode: 'normal',
      input: '',
    };
    const nickUpdateAction = {
      type: USER_NICK_UPDATED,
    };
    expect(chatReducer(stateWhileWritingCommand, nickUpdateAction))
      .toEqual(expectedStateAfterCommandExecution);

    const thinkAction = {
      type: USER_THINKED,
      payload: {
        user: {
          lastMessageId: 1,
        },
      },
    };
    expect(chatReducer(stateWhileWritingCommand, thinkAction))
      .toEqual(expectedStateAfterCommandExecution);

    const oopsAction = {
      type: USER_OOPSED,
      payload: {
        user: {
          lastMessageId: 1,
        },
      },
    };
    expect(chatReducer(stateWhileWritingCommand, oopsAction))
      .toEqual(expectedStateAfterCommandExecution);
  });

  it('should update message type after think command executed', () => {
    const message = { text: 'hello', type: 'normal', uuid: 1 };
    const otherMessages = [
      { text: 'hello', type: 'normal', id: 2 },
      { text: 'hello', type: 'think', id: 3 },
      { text: 'hello', type: 'normal', id: 4 },
    ];
    const stateBeforeCommand = {
      messages: [
        message,
        ...otherMessages,
      ],
      input: '/test',
      inputMode: 'command',
    };
    const expectedStateAfterCommandExecution = {
      ...{
        ...stateBeforeCommand,
        messages: [
          { ...message, type: 'think' },
          ...otherMessages,
        ],
      },
      inputMode: 'normal',
      input: '',
    };
    const thinkAction = {
      type: USER_THINKED,
      payload: {
        user: {
          lastMessageId: 1,
        },
      },
    };
    expect(chatReducer(stateBeforeCommand, thinkAction))
      .toEqual(expectedStateAfterCommandExecution);
  });

  it('should delete message type after oops command executed', () => {
    const message = { text: 'hello', type: 'normal', uuid: 1 };
    const otherMessages = [
      { text: 'hello', type: 'normal', id: 2 },
      { text: 'hello', type: 'think', id: 3 },
      { text: 'hello', type: 'normal', id: 4 },
    ];
    const stateBeforeCommand = {
      messages: [
        message,
        ...otherMessages,
      ],
      input: '/test',
      inputMode: 'command',
    };
    const expectedStateAfterCommandExecution = {
      ...{
        ...stateBeforeCommand,
        messages: [
          ...otherMessages,
        ],
      },
      inputMode: 'normal',
      input: '',
    };
    const oopsAction = {
      type: USER_OOPSED,
      payload: {
        user: {
          lastMessageId: 1,
        },
      },
    };
    expect(chatReducer(stateBeforeCommand, oopsAction))
      .toEqual(expectedStateAfterCommandExecution);
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

