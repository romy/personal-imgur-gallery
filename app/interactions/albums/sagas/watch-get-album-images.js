import { takeLatest } from 'redux-saga';

import getAlbumImages from './get-album-images';


function* watchGetAlbumImages() {
  yield* takeLatest('SELECT_ALBUM', getAlbumImages);
}


export default watchGetAlbumImages;
