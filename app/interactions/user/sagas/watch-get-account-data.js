import { takeLatest } from 'redux-saga';

import getAccountData from './get-account-data';


function* watchGetAccountData() {
  yield* takeLatest('GET_ACCOUNT_DATA', getAccountData);
}


export default watchGetAccountData;
