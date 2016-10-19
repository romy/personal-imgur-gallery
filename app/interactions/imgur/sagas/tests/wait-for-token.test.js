import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import expect, { createSpy } from 'expect';

import waitForToken from '../wait-for-token';


describe('saga waitForToken', () => {
  it('should call delay with 100ms', () => {
    const gen = waitForToken();
    const next = gen.next();

    expect(next.value).toEqual(call(delay, 100));
  });

  it('should parse the query string into an object', () => {
    const popup = {
      location: { hash: '#access_token=1111&name=One' },
      closed: false,
      close: () => {},
    };

    const gen = waitForToken(popup);
    gen.next();
    const next = gen.next();

    expect(next.value).toEqual({ access_token: '1111', name: 'One' });
  });

  it('should close the popup', () => {
    const closePopup = createSpy();

    const popup = {
      location: { hash: '#access_token=1111&name=One' },
      closed: false,
      close: closePopup,
    };

    const gen = waitForToken(popup);
    gen.next();
    gen.next();

    expect(closePopup).toHaveBeenCalled();
  });
});
