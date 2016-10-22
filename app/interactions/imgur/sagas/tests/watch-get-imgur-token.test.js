import expect from 'expect';

import getAccountData from '../get-account-data';
import watchGetImgurToken from '../watch-get-imgur-token';


describe('saga watchGetImgurToken', () => {
  it('should watch action GET_ACCOUNT_DATA', () => {
    const gen = watchGetImgurToken();
    const next = gen.next();

    expect(next.value.TAKE.pattern).toEqual('GET_ACCOUNT_DATA');
  });

  it('should call function getAccountData', () => {
    const gen = watchGetImgurToken();
    gen.next();
    const next = gen.next();

    expect(next.value.FORK.fn).toEqual(getAccountData);
  });
});
