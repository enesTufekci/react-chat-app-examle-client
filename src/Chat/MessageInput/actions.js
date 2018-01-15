import {
  INPUT_UPDATED,
  USER_SENT_MESSAGE,
} from 'common/actionTypes';

export const updateInput = e => ({
  type: INPUT_UPDATED,
  payload: e.target.value,
});

export const sendMessage = text => ({
  type: USER_SENT_MESSAGE,
  payload: {
    text,
    type: 'normal',
  },
});
