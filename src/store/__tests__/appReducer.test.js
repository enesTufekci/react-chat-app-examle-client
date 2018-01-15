import appReducer from '../appReducer';

describe('#appReducer', () => {
  const initialState = {
    user: { nick: 'enes', lastMessageId: 1 },
    users: ['enes', 'foo', 'bar'],
  };
  it('should return state', () => {
    const action = {
      type: 'UNDEFINED_ACTION',
    };
    expect(appReducer(initialState, action)).toEqual(initialState);
  });
});
