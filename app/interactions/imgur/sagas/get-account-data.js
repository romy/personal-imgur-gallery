import { call, put } from 'redux-saga/effects';

import openImgurPopup from '../open-imgur-popup';
import waitForToken from './wait-for-token';


function* getAccountData() {
  try {
    const popup = yield call(openImgurPopup);
    const response = yield call(waitForToken, popup);
    yield put({ type: 'GET_ACCOUNT_DATA_SUCCESS', payload: response });
  } catch (err) {
    yield put({ type: 'GET_ACCOUNT_DATA_FAILED', message: err.message });
  }
}


export default getAccountData;
