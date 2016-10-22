import expect from 'expect';

import getAccountData from '../get-account-data';
import watchGetAccountData from '../watch-get-account-data';


describe('saga watchGetAccountData', () => {
  it('should watch action GET_ACCOUNT_DATA', () => {
    const gen = watchGetAccountData();
    const next = gen.next();

    expect(next.value.TAKE.pattern).toEqual('GET_ACCOUNT_DATA');
  });

  it('should call function getAccountData', () => {
    const gen = watchGetAccountData();
    gen.next();
    const next = gen.next();

    expect(next.value.FORK.fn).toEqual(getAccountData);
  });
});
