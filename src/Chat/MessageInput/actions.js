import {
  INPUT_UPDATED,
  USER_SENT_MESSAGE,
  INPUT_MODE_SWITCHED,
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
