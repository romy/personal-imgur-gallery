import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';
import R from 'ramda';

import { selectToken, selectUsername } from 'interactions/user/selectors';


function* getAlbums() {
  try {
    const token = yield select(selectToken);
    const username = yield select(selectUsername);
    const url = `https://api.imgur.com/3/account/${username}/albums`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = yield call(axios.get, url, config);
    const albums = R.indexBy(R.prop('id'), response.data.data);
    yield put({ type: 'GET_ALBUMS_SUCCESS', payload: albums });
  } catch (err) {
    yield put({ type: 'GET_ALBUMS_FAILED', message: err.message });
  }
}


export default getAlbums;
