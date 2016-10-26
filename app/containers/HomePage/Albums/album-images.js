import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import PhotoAlbum from 'material-ui/svg-icons/image/photo-album';
import React from 'react';
import R from 'ramda';
import { setDisplayName, setPropTypes, withHandlers } from 'recompose';

import { deselectAlbum as deselectAlbumAction } from 'interactions/selection/actions';
import ImageTile from './image-tile';
import { selectAlbumTitle, selectImageIds } from 'interactions/albums/selectors';


const styles = {
  header: {
    margin: '2%',
    fontSize: '200%',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
    margin: '2%',
  },
  icon: {
    width: 36,
    height: 36,
  },
};

const AlbumImages = ({ title, imageIds, id, onClick }) => { // eslint-disable-line react/prop-types
  let imageTiles;

  if (imageIds) {
    imageTiles = R.map(
      (imageId) => <ImageTile id={imageId} key={imageId} albumId={id} />,
      imageIds
    );
  }

  return (
    <div>
      <IconButton iconStyle={styles.icon} onClick={onClick}>
        <PhotoAlbum />
      </IconButton>
      <h1 style={styles.header}>Images of {title}</h1>
      <div style={styles.grid}>
        <GridList cellHeight={400} style={styles.gridList}>
          {imageTiles}
        </GridList>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) =>
  ({
    title: selectAlbumTitle(state, props),
    imageIds: selectImageIds(state, props),
  });

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    deselectAlbum: deselectAlbumAction,
  }, dispatch);

const enhance = R.pipe(
  setPropTypes({
    id: React.PropTypes.string,
    onClick: React.PropTypes.func,
  }),
  withHandlers({
    onClick: (props) =>
      props.deselectAlbum,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  setDisplayName('AlbumImages'),
);


export { AlbumImages };
export default enhance(AlbumImages);
