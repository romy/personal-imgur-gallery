import expect from 'expect';
import { fork } from 'redux-saga/effects';

import sagas from '../sagas';
import watchGetImgurToken from '..//interactions/imgur/sagas/watch-get-imgur-token';


describe('sagas', () => {
  it('should fork saga watchGetImgurToken', () => {
    const gen = sagas();
    const next = gen.next();

    expect(next.value[0]).toEqual(fork(watchGetImgurToken));
  });
});
