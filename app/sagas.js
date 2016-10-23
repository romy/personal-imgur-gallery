import { fork } from 'redux-saga/effects';

import watchGetAccountData from 'interactions/user/sagas/watch-get-account-data';
import watchGetAlbums from 'interactions/albums/sagas/watch-get-albums';


function* sagas() {
  yield [
    fork(watchGetAccountData),
    fork(watchGetAlbums),
  ];
}


export default sagas;
