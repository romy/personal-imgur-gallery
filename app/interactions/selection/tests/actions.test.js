import expect from 'expect';

import { deselectAlbum } from '../actions';


describe('action creator deselectAlbum', () => {
  it('should return an action with type DESELECT_ALBUM', () => {
    const action = deselectAlbum();

    expect(action.type).toEqual('DESELECT_ALBUM');
  });
});
