import Immutable from 'immutable';


const selectAlbumIds = (state) => {
  const albums = state.get('albums', Immutable.Map()); // eslint-disable-line new-cap
  return albums.keySeq().toJS();
};


export { selectAlbumIds };
