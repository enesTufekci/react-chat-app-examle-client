import { INPUT_UPDATED, USER_SENT_MESSAGE } from 'common/actionTypes';
import { inputUpdate, sendMessage } from '../actions';

describe('#inputUpdate', () => {
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
    expect(inputUpdate(mockEvent)).toEqual(expectedAction);
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
    };
    expect(sendMessage(mockText)).toEqual(expectedAction);
  });
});

