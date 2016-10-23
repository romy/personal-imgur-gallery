import axios from 'axios';
import expect from 'expect';
import { put, select } from 'redux-saga/effects';

import getAlbums from '../get-albums';
import { selectToken, selectUsername } from 'interactions/user/selectors';


describe('saga getAlbums', () => {
  it('should select the token from the state', () => {
    const gen = getAlbums();
    const next = gen.next();

    expect(next.value).toEqual(select(selectToken));
  });

  it('should select the username from the state', () => {
    const gen = getAlbums();

    gen.next();
    const next = gen.next();

    expect(next.value).toEqual(select(selectUsername));
  });

  it('should call function axios.get', () => {
    const gen = getAlbums();

    gen.next();
    gen.next();
    const next = gen.next();

    expect(next.value.CALL.fn).toEqual(axios.get);
  });

  it('should put action GET_ALBUMS_SUCCESS on success', () => {
    const gen = getAlbums();
    const response = {
      data: {
        data: [{ id: 'ID1' }, { id: 'ID2' }],
      },
    };
    const action = {
      type: 'GET_ALBUMS_SUCCESS',
      payload: {
        ID1: { id: 'ID1' },
        ID2: { id: 'ID2' },
      },
    };

    gen.next();
    gen.next();
    gen.next();
    const next = gen.next(response);

    expect(next.value).toEqual(put(action));
  });

  it('should put action GET_ALBUMS_FAILED on failure', () => {
    const gen = getAlbums();
    const action = { type: 'GET_ALBUMS_FAILED', message: 'error message' };
    const error = new Error('error message');

    gen.next();
    gen.next();
    const next = gen.throw(error);

    expect(next.value).toEqual(put(action));
  });
});
