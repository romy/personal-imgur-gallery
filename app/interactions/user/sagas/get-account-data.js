import { call, put } from 'redux-saga/effects';

import openImgurPopup from '../open-imgur-popup';
import waitForAccountData from './wait-for-account-data';


function* getAccountData() {
  try {
    const popup = yield call(openImgurPopup);
    const response = yield call(waitForAccountData, popup);
    yield put({ type: 'GET_ACCOUNT_DATA_SUCCESS', payload: response });
  } catch (err) {
    yield put({ type: 'GET_ACCOUNT_DATA_FAILED', message: err.message });
  }
}


export default getAccountData;
