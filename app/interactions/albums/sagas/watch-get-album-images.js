import { takeLatest } from 'redux-saga';

import getAlbumImages from './get-album-images';


function* watchGetAlbumImages() {
  yield* takeLatest('GET_ALBUM_IMAGES', getAlbumImages);
}


export default watchGetAlbumImages;
