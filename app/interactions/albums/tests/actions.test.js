import expect from 'expect';

import { getAlbums } from '../actions';


describe('action creator getAlbums', () => {
  it('should return an action with type GET_ALBUMS', () => {
    const action = getAlbums();

    expect(action.type).toEqual('GET_ALBUMS');
  });
});
