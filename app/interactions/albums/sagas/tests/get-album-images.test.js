import axios from 'axios';
import expect from 'expect';
import { put, select } from 'redux-saga/effects';

import getAlbumImages from '../get-album-images';
import { selectToken } from 'interactions/user/selectors';


describe('saga getAlbumImages', () => {
  const initialAction = { payload: { id: 'albumId' } };

  it('should select the token from the state', () => {
    const gen = getAlbumImages(initialAction);
    const next = gen.next();

    expect(next.value).toEqual(select(selectToken));
  });

  it('should call function axios.get', () => {
    const gen = getAlbumImages(initialAction);

    gen.next();
    const next = gen.next();

    expect(next.value.CALL.fn).toEqual(axios.get);
  });

  it('should put action GET_ALBUM_SUCCESS on success', () => {
    const gen = getAlbumImages(initialAction);
    const response = {
      data: {
        data: { id: 'ID1', images: [{ id: 'ID' }] },
      },
    };
    const action = {
      type: 'GET_ALBUM_SUCCESS',
      payload: {
        id: 'ID1',
        images: { ID: { id: 'ID' } },
      },
    };

    gen.next();
    gen.next();
    const next = gen.next(response);

    expect(next.value).toEqual(put(action));
  });

  it('should put action GET_ALBUM_FAILED on failure', () => {
    const gen = getAlbumImages(initialAction);
    const action = { type: 'GET_ALBUM_FAILED', message: 'error message' };
    const error = new Error('error message');

    gen.next();
    const next = gen.throw(error);

    expect(next.value).toEqual(put(action));
  });
});
