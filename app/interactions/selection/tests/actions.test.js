import expect from 'expect';

import { deselectAlbum, selectAlbum } from '../actions';


describe('action creator deselectAlbum', () => {
  it('should return an action with type DESELECT_ALBUM', () => {
    const action = deselectAlbum();

    expect(action.type).toEqual('DESELECT_ALBUM');
  });
});

describe('action creator selectAlbum', () => {
  it('should return an action with type SELECT_ALBUM', () => {
    const action = selectAlbum();

    expect(action.type).toEqual('SELECT_ALBUM');
  });

  it('should return an action with a payload', () => {
    const action = selectAlbum('id');

    expect(action.payload.id).toEqual('id');
  });
});
