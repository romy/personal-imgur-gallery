import { connect } from 'react-redux';
import { setDisplayName, setPropTypes } from 'recompose';
import React from 'react';
import R from 'ramda';

import AlbumCard from './album-card';
import { selectAlbumIds } from 'interactions/albums/selectors';
import { selectUsername } from 'interactions/user/selectors';


const AlbumCollection = ({ username, albumIds }) => { // eslint-disable-line react/prop-types
  const albumCards = R.map(
    (id) => <AlbumCard id={id} key={id} />,
    albumIds
  );

  return (
    <div>
      <h1 style={{ margin: '5%', fontSize: '300%' }}>Albums of {username}</h1>
      {albumCards}
    </div>
  );
};

const mapStateToProps = (state) =>
  ({
    albumIds: selectAlbumIds(state),
    username: selectUsername(state),
  });

const enhance = R.pipe(
  setPropTypes({
    albums: React.PropTypes.object,
    username: React.PropTypes.string,
  }),
  connect(mapStateToProps),
  setDisplayName('AlbumCollection'),
);


export { AlbumCollection };
export default enhance(AlbumCollection);
