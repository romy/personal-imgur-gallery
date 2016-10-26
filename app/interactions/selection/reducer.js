import { fromJS } from 'immutable';


const initialState = fromJS({});

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_ALBUM_IMAGES':
      return state.merge({
        albumId: action.payload.id,
      });
    case 'DESELECT_ALBUM':
      return state.merge({
        albumId: null,
      });
    default:
      return state;
  }
};


export default reducer;
