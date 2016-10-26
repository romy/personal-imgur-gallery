import expect from 'expect';

import { deselectAlbum, getAlbumImages } from '../actions';


describe('action creator deselectAlbum', () => {
  it('should return an action with type DESELECT_ALBUM', () => {
    const action = deselectAlbum();

    expect(action.type).toEqual('DESELECT_ALBUM');
  });
});

describe('action creator getAlbumImages', () => {
  it('should return an action with type GET_ALBUM_IMAGES', () => {
    const action = getAlbumImages();

    expect(action.type).toEqual('GET_ALBUM_IMAGES');
  });

  it('should return an action with a payload', () => {
    const action = getAlbumImages('id');

    expect(action.payload.id).toEqual('id');
  });
});
