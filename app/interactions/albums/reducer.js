import { fromJS } from 'immutable';


const initialState = fromJS({});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_ALBUMS_SUCCESS':
      return state.merge(action.payload);
    case 'GET_ALBUMS_FAILED':
      return state.merge({
        error: action.message,
      });
    case 'GET_ALBUM_IMAGES':
      return state.merge({
        selected: action.payload.id,
      });
    case 'GET_ALBUM_SUCCESS':
      return state.mergeIn(
        [action.payload.id],
        { images: action.payload.images }
      );
    case 'GET_ALBUM_FAILED':
      return state.merge({
        error: action.message,
      });
    default:
      return state;
  }
};


export default reducer;
