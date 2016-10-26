import { connect } from 'react-redux';
import { GridList } from 'material-ui/GridList';
import React from 'react';
import R from 'ramda';
import { setDisplayName, setPropTypes } from 'recompose';

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
};

const AlbumImages = ({ title, imageIds, id }) => { // eslint-disable-line react/prop-types
  let imageTiles;

  if (imageIds) {
    imageTiles = R.map(
      (imageId) => <ImageTile id={imageId} key={imageId} albumId={id} />,
      imageIds
    );
  }

  return (
    <div>
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

const enhance = R.pipe(
  setPropTypes({
    id: React.PropTypes.string,
  }),
  connect(mapStateToProps),
  setDisplayName('AlbumImages'),
);


export { AlbumImages };
export default enhance(AlbumImages);
