import { fromJS } from 'immutable';


const initialState = fromJS({
  token: null,
  username: null,
  error: null,
});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_TOKEN_SUCCESS':
      return state.merge({
        token: action.payload.token,
        username: action.payload.username,
        error: null,
      });
    case 'GET_TOKEN_FAILED':
      return state.merge({
        token: null,
        username: null,
        error: action.message,
      });
    default:
      return state;
  }
};


export default reducer;
