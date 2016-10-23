import Immutable from 'immutable';


const selectAlbumIds = (state) => {
  const albums = state.get('albums', Immutable.Map()); // eslint-disable-line new-cap
  return albums.keySeq().toJS();
};

const selectAlbumTitle = (state, props) => {
  const album = state.getIn(['albums', props.id]);
  return album.get('title');
};

const selectImageIds = (state, props) => {
  const album = state.getIn(['albums', props.id]);
  const images = album.get('images', Immutable.Map()); // eslint-disable-line new-cap
  return images.keySeq().toJS();
};


export { selectAlbumIds, selectAlbumTitle, selectImageIds };
