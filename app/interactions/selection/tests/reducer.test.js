import expect from 'expect';
import { fromJS } from 'immutable';

import reducer from '../reducer';


describe('selection reducer', () => {
  it('should return the initial state', () => {
    const initialState = fromJS({});
    const state = reducer();

    expect(state).toEqual(initialState);
  });

  it('should return the payload from action SELECT_ALBUM', () => {
    const action = {
      type: 'SELECT_ALBUM',
      payload: { id: 'albumId' },
    };
    const expectedState = fromJS({
      albumId: 'albumId',
    });
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });

  it('should set albumId to null at action DESELECT_ALBUM', () => {
    const action = {
      type: 'DESELECT_ALBUM',
    };
    const expectedState = fromJS({
      albumId: null,
    });
    const state = reducer(undefined, action);

    expect(state).toEqual(expectedState);
  });
});
