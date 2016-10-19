import { call, put } from 'redux-saga/effects';
import expect from 'expect';

import getImgurToken from '../get-imgur-token';
import openImgurPopup from '../open-imgur-popup';
import waitForToken from '../wait-for-token';


describe('saga getImgurToken', () => {
  it('should call function openImgurPopup', () => {
    const gen = getImgurToken();
    const next = gen.next();

    expect(next.value).toEqual(call(openImgurPopup));
  });

  it('should call function waitForToken', () => {
    const gen = getImgurToken();
    const popup = {};

    gen.next();
    const next = gen.next(popup);

    expect(next.value).toEqual(call(waitForToken, popup));
  });

  it('should put action GET_TOKEN_SUCCESS on success', () => {
    const gen = getImgurToken();
    const action = { type: 'GET_TOKEN_SUCCESS', payload: undefined };

    gen.next();
    gen.next();
    const next = gen.next();

    expect(next.value).toEqual(put(action));
  });

  it('should put action GET_TOKEN_FAILED on failure', () => {
    const gen = getImgurToken();
    const action = { type: 'GET_TOKEN_FAILED', message: 'error message' };
    const error = new Error('error message');

    gen.next();
    const next = gen.throw(error);

    expect(next.value).toEqual(put(action));
  });
});
