import { fork } from 'redux-saga/effects';

import watchGetImgurToken from './interactions/imgur/sagas/watch-get-imgur-token';


function* sagas() {
  yield [
    fork(watchGetImgurToken),
  ];
}


export default sagas;
