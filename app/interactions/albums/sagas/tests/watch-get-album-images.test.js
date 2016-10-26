import expect from 'expect';

import getAlbumImages from '../get-album-images';
import watchGetAlbumImages from '../watch-get-album-images';


describe('saga watchGetAlbumImages', () => {
  it('should watch action SELECT_ALBUM', () => {
    const gen = watchGetAlbumImages();
    const next = gen.next();

    expect(next.value.TAKE.pattern).toEqual('SELECT_ALBUM');
  });

  it('should call function getAlbumImages', () => {
    const gen = watchGetAlbumImages();
    gen.next();
    const next = gen.next();

    expect(next.value.FORK.fn).toEqual(getAlbumImages);
  });
});
