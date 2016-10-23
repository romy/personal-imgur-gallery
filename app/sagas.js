import { fork } from 'redux-saga/effects';

import watchGetAccountData from 'interactions/user/sagas/watch-get-account-data';


function* sagas() {
  yield [
    fork(watchGetAccountData),
  ];
}


export default sagas;
