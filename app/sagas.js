import { fork } from 'redux-saga/effects';

import watchGetAccountData from 'interactions/user/sagas/watch-get-account-data';
import watchGetAlbumImages from 'interactions/albums/sagas/watch-get-album-images';
import watchGetAlbums from 'interactions/albums/sagas/watch-get-albums';


function* sagas() {
  yield [
    fork(watchGetAccountData),
    fork(watchGetAlbums),
    fork(watchGetAlbumImages),
  ];
}


export default sagas;
