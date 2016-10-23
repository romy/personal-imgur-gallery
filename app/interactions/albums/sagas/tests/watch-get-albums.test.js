import expect from 'expect';

import getAlbums from '../get-albums';
import watchGetAlbums from '../watch-get-albums';


describe('saga watchGetAlbums', () => {
  it('should watch action GET_ALBUMS', () => {
    const gen = watchGetAlbums();
    const next = gen.next();

    expect(next.value.TAKE.pattern).toEqual('GET_ALBUMS');
  });

  it('should call function getAlbums', () => {
    const gen = watchGetAlbums();
    gen.next();
    const next = gen.next();

    expect(next.value.FORK.fn).toEqual(getAlbums);
  });
});
