import { call, put } from 'redux-saga/effects';
import expect from 'expect';

import getAccountData from '../get-account-data';
import openImgurPopup from '../../open-imgur-popup';
import waitForToken from '../wait-for-token';


describe('saga getAccountData', () => {
  it('should call function openImgurPopup', () => {
    const gen = getAccountData();
    const next = gen.next();

    expect(next.value).toEqual(call(openImgurPopup));
  });

  it('should call function waitForToken', () => {
    const gen = getAccountData();
    const popup = {};

    gen.next();
    const next = gen.next(popup);

    expect(next.value).toEqual(call(waitForToken, popup));
  });

  it('should put action GET_ACCOUNT_DATA_SUCCESS on success', () => {
    const gen = getAccountData();
    const action = { type: 'GET_ACCOUNT_DATA_SUCCESS', payload: undefined };

    gen.next();
    gen.next();
    const next = gen.next();

    expect(next.value).toEqual(put(action));
  });

  it('should put action GET_ACCOUNT_DATA_FAILED on failure', () => {
    const gen = getAccountData();
    const action = { type: 'GET_ACCOUNT_DATA_FAILED', message: 'error message' };
    const error = new Error('error message');

    gen.next();
    const next = gen.throw(error);

    expect(next.value).toEqual(put(action));
  });
});
