import {
  INPUT_UPDATED,
  USER_SENT_MESSAGE,
  INPUT_MODE_SWITCHED,
  USER_NICK_UPDATED,
  USER_THINKED,
  USER_OOPSED,
} from 'common/actionTypes';

export const updateInput = e => ({
  type: INPUT_UPDATED,
  payload: e.target.value,
});

export const sendMessage = text => ({
  type: USER_SENT_MESSAGE,
  payload: {
    text: text.replace(/(?:\r\n|\r|\n)/g, '<br />'),
    type: 'normal',
  },
  meta: {
    user: true,
    date: true,
    uuid: true,
    socket: true,
  },
});

export const switchInputMode = mode => ({
  type: INPUT_MODE_SWITCHED,
  payload: mode,
});

export const COMMANDS = {
  '/nick': parameter => ({
    type: USER_NICK_UPDATED,
    payload: {
      newNick: parameter,
    },
    meta: {
      socket: true,
    },
  }),
  '/think': () => ({
    type: USER_THINKED,
    payload: {
      type: 'think',
    },
    meta: {
      user: true,
      socket: true,
    },
  }),
  '/oops': () => ({
    type: USER_OOPSED,
    meta: {
      user: true,
      socket: true,
    },
  }),
};

export const sendCommand = (command) => {
  const commandArray = command.split(' ');
  const type = commandArray[0];
  const parameter = commandArray[1];
  const commandHandler = COMMANDS[type];
  return commandHandler ? commandHandler(parameter) : null;
};

