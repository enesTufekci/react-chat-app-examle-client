import { INPUT_UPDATED, USER_SENT_MESSAGE } from 'common/actionTypes';
import { updateInput, sendMessage } from '../actions';

describe('#updateInput', () => {
  it('should create an action to update input', () => {
    const mockEvent = {
      target: {
        value: 'test',
      },
    };
    const expectedAction = {
      type: INPUT_UPDATED,
      payload: mockEvent.target.value,
    };
    expect(updateInput(mockEvent)).toEqual(expectedAction);
  });
});


describe('#sendMessage', () => {
  it('should create an action to send message/update messages', () => {
    const mockText = 'test';
    const expectedAction = {
      type: USER_SENT_MESSAGE,
      payload: {
        text: mockText,
        type: 'normal',
      },
      meta: {
        user: true,
        date: true,
        uuid: true,
      },
    };
    expect(sendMessage(mockText)).toEqual(expectedAction);
  });
});
