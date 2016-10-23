import { takeLatest } from 'redux-saga';

import getAlbums from './get-albums';


function* watchGetAlbums() {
  yield* takeLatest('GET_ALBUMS', getAlbums);
}


export default watchGetAlbums;
