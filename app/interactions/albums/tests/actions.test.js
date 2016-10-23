import expect from 'expect';

import { getAlbums, getAlbumImages } from '../actions';


describe('action creator getAlbums', () => {
  it('should return an action with type GET_ALBUMS', () => {
    const action = getAlbums();

    expect(action.type).toEqual('GET_ALBUMS');
  });
});

describe('action creator getAlbumImages', () => {
  it('should return an action with type GET_ALBUM_IMAGES', () => {
    const action = getAlbumImages();

    expect(action.type).toEqual('GET_ALBUM_IMAGES');
  });

  it('should return an action with a payload', () => {
    const action = getAlbumImages('id');

    expect(action.payload).toEqual('id');
  });
});
