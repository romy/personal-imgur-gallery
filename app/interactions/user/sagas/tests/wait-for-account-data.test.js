import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import expect, { createSpy } from 'expect';

import waitForAccountData from '../wait-for-account-data';


describe('saga waitForAccountData', () => {
  it('should call delay with 100ms', () => {
    const gen = waitForAccountData();
    const next = gen.next();

    expect(next.value).toEqual(call(delay, 100));
  });

  it('should parse the query string into an object', () => {
    const popup = {
      location: { hash: '#access_token=1001&account_username=Mio' },
      closed: false,
      close: () => {},
    };

    const gen = waitForAccountData(popup);
    gen.next();
    const next = gen.next();

    expect(next.value).toEqual({ token: '1001', username: 'Mio' });
  });

  it('should close the popup', () => {
    const closePopup = createSpy();

    const popup = {
      location: { hash: '#access_token=1001&account_username=Mio' },
      closed: false,
      close: closePopup,
    };

    const gen = waitForAccountData(popup);
    gen.next();
    gen.next();

    expect(closePopup).toHaveBeenCalled();
  });
});
