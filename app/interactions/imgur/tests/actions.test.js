import expect from 'expect';

import getImgurToken from '../actions';


describe('action creator getImgurToken', () => {
  it('should return an action with type GET_IMGUR_TOKEN', () => {
    const action = getImgurToken();

    expect(action.type).toEqual('GET_IMGUR_TOKEN');
  });
});
