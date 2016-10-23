import expect from 'expect';
import { fork } from 'redux-saga/effects';

import sagas from '../sagas';
import watchGetAccountData from 'interactions/user/sagas/watch-get-account-data';


describe('sagas', () => {
  it('should fork saga watchGetAccountData', () => {
    const gen = sagas();
    const next = gen.next();

    expect(next.value[0]).toEqual(fork(watchGetAccountData));
  });
});
