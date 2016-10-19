import expect from 'expect';

import getImgurToken from '../get-imgur-token';
import watchGetImgurToken from '../watch-get-imgur-token';


describe('saga watchGetImgurToken', () => {
  it('should watch action GET_IMGUR_TOKEN', () => {
    const gen = watchGetImgurToken();
    const next = gen.next();

    expect(next.value.TAKE.pattern).toEqual('GET_IMGUR_TOKEN');
  });

  it('should call function getImgurToken', () => {
    const gen = watchGetImgurToken();
    gen.next();
    const next = gen.next();

    expect(next.value.FORK.fn).toEqual(getImgurToken);
  });
});
