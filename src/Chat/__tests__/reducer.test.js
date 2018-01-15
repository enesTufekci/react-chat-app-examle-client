import {
  USER_CONNECTED,
} from 'common/actionTypes';

import { connectUser } from '../reducer';

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

