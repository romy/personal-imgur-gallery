import { call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import querystring from 'query-string';


const popupPollingInterval = 100;

function* waitForToken(popup) {
  let hash;

  while (true) { // eslint-disable-line no-constant-condition
    yield call(delay, popupPollingInterval);

    if (popup.closed) {
      throw new Error('Authentication was cancelled.');
    }

    try {
      hash = popup.location.hash;
    } catch (err) {} // eslint-disable-line no-empty

    if (hash) {
      popup.close();
      const response = querystring.parse(hash.substr(1));

      if (!response.access_token || !response.account_username) {
        throw new Error(`Failed to parse response: ${response}`);
      }

      return {
        token: response.access_token,
        username: response.account_username,
      };
    }
  }
}


export default waitForToken;
