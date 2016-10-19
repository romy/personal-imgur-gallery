import { takeLatest } from 'redux-saga';

import getImgurToken from './get-imgur-token';


function* watchGetImgurToken() {
  yield* takeLatest('GET_IMGUR_TOKEN', getImgurToken);
}


export default watchGetImgurToken;
