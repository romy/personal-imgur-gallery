import expect from 'expect';
import { fromJS } from 'immutable';

import reducer from '../reducer';


describe('albums reducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({});
    const state = reducer();

    expect(state).toEqual(initialState);
  });

  it('should return the payload from action GET_ALBUMS_SUCCESS', () => {
    const action = {
      type: 'GET_ALBUMS_SUCCESS',
      payload: {
        albumId1: {},
        albumId2: {},
      },
    };
    const expectedState = fromJS({
      albumId1: {},
      albumId2: {},
    });
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should return the error message from action GET_ALBUMS_FAILED', () => {
    const action = {
      type: 'GET_ALBUMS_FAILED',
      message: 'error message',
    };
    const expectedState = fromJS({
      error: 'error message',
    });
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should return the payload from action GET_ALBUM_SUCCESS', () => {
    const action = {
      type: 'GET_ALBUM_SUCCESS',
      payload: {
        id: 'albumId',
        images: [{ image1: {} }, { image2: {} }],
      },
    };
    const expectedState = fromJS({
      albumId: {
        images: [{ image1: {} }, { image2: {} }],
      },
    });
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should return the error message from action GET_ALBUM_FAILED', () => {
    const action = {
      type: 'GET_ALBUM_FAILED',
      message: 'error message',
    };
    const expectedState = fromJS({
      error: 'error message',
    });
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
