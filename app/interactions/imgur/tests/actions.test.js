import expect from 'expect';

import getAccountData from '../actions';


describe('action creator getAccountData', () => {
  it('should return an action with type GET_ACCOUNT_DATA', () => {
    const action = getAccountData();

    expect(action.type).toEqual('GET_ACCOUNT_DATA');
  });
});
