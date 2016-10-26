import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDisplayName } from 'recompose';
import React from 'react';
import R from 'ramda';

import AlbumImages from './album-images';
import AlbumCollection from './album-collection';
import { getAlbums as getAlbumsAction } from 'interactions/albums/actions';


class Albums extends React.Component {
  componentWillMount() {
    this.props.getAlbums();
  }

  render() {
    let children;

    if (this.props.isAlbumSelected) {
      children = <AlbumImages id={this.props.selectedAlbum} />;
    } else {
      children = <AlbumCollection />;
    }

    return (
      children
    );
  }
}

Albums.propTypes = {
  getAlbums: React.PropTypes.func,
  isAlbumSelected: React.PropTypes.bool,
  selectedAlbum: React.PropTypes.string,
};

const mapStateToProps = (state) => {
  const selectedAlbum = state.getIn(['selection', 'albumId']);

  return ({
    isAlbumSelected: !!selectedAlbum,
    selectedAlbum,
  });
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getAlbums: getAlbumsAction,
  }, dispatch);

const enhance = R.pipe(
  connect(mapStateToProps, mapDispatchToProps),
  setDisplayName('Albums'),
);


export { Albums };
export default enhance(Albums);
