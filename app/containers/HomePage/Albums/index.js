import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDisplayName, setPropTypes } from 'recompose';
import React from 'react';
import R from 'ramda';

import AlbumCollection from './album-collection';
import { getAlbums as getAlbumsAction } from 'interactions/albums/actions';


class Albums extends React.Component {
  componentWillMount() {
    this.props.getAlbums();
  }

  render() {
    return (
      <AlbumCollection />
    );
  }
}

Albums.propTypes = {
  getAlbums: React.PropTypes.func,
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getAlbums: getAlbumsAction,
  }, dispatch);

const enhance = R.pipe(
  setPropTypes({
    getAlbums: React.PropTypes.func,
  }),
  connect(null, mapDispatchToProps),
  setDisplayName('Albums'),
);

export { Albums };
export default enhance(Albums);
