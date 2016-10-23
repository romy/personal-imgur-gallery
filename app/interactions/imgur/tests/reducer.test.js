import expect from 'expect';
import { fromJS } from 'immutable';

import reducer from '../reducer';


describe('user reducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({
      token: null,
      username: null,
      error: null,
    });
    const state = reducer();

    expect(state).toEqual(initialState);
  });

  it('should return the payload from action GET_ACCOUNT_DATA_SUCCESS', () => {
    const action = {
      type: 'GET_ACCOUNT_DATA_SUCCESS',
      payload: {
        token: '1001',
        username: 'Mio',
      },
    };
    const expectedState = fromJS({
      token: '1001',
      username: 'Mio',
      error: null,
    });
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should return the error message from action GET_ACCOUNT_DATA_FAILED', () => {
    const action = {
      type: 'GET_ACCOUNT_DATA_FAILED',
      message: 'error message',
    };
    const expectedState = fromJS({
      token: null,
      username: null,
      error: 'error message',
    });
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
