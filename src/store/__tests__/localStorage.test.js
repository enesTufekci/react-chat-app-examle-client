/* eslint-disable no-underscore-dangle */
import { saveState, loadState } from '../localStorage';

describe('localStorage', () => {
  beforeEach(() => {
    // values stored in tests will also be available in other tests unless you run
    localStorage.clear();
    // or directly reset the storage
    localStorage.__STORE__ = {};
    // you may also reset all mocks, which could impact your other mocks
    jest.resetAllMocks();
    // or individually reset a mock used
    localStorage.setItem.mockReset();
  });
  it('should set item correctly', () => {
    const KEY = 'state';
    const VALUE = {
      user: 'enes',
      users: ['foo', 'bar', 'baz'],
    };
    saveState(VALUE);
    expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, JSON.stringify(VALUE));
  });
  it('should load item correctly', () => {
    const KEY = 'state';
    loadState(KEY);
    expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);
  });
});
