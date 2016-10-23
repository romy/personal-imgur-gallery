import axios from 'axios';
import { call, put, select } from 'redux-saga/effects';
import R from 'ramda';

import { selectToken } from 'interactions/user/selectors';


function* getAlbumImages(action) {
  try {
    const id = action.payload.id;
    const token = yield select(selectToken);
    const url = `https://api.imgur.com/3/album/${id}`;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const response = yield call(axios.get, url, config);
    const images = R.indexBy(R.prop('id'), response.data.data.images);
    const payload = {
      id: response.data.data.id,
      images,
    };
    yield put({ type: 'GET_ALBUM_SUCCESS', payload });
  } catch (err) {
    yield put({ type: 'GET_ALBUM_FAILED', message: err.message });
  }
}


export default getAlbumImages;
