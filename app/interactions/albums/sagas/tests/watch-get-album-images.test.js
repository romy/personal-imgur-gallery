import expect from 'expect';

import getAlbumImages from '../get-album-images';
import watchGetAlbumImages from '../watch-get-album-images';


describe('saga watchGetAlbumImages', () => {
  it('should watch action GET_ALBUM_IMAGES', () => {
    const gen = watchGetAlbumImages();
    const next = gen.next();

    expect(next.value.TAKE.pattern).toEqual('GET_ALBUM_IMAGES');
  });

  it('should call function getAlbumImages', () => {
    const gen = watchGetAlbumImages();
    gen.next();
    const next = gen.next();

    expect(next.value.FORK.fn).toEqual(getAlbumImages);
  });
});
