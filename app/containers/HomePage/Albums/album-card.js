import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDisplayName, setPropTypes } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import R from 'ramda';

import { getAlbumImages as getAlbumImagesAction } from 'interactions/albums/actions';

const styles = {
  card: {
    margin: '5%',
  },
};

const AlbumCard = ({ title, src, description, getAlbumImages, id }) => // eslint-disable-line react/prop-types
  <Card style={styles.card}>
    <CardMedia overlay={<CardTitle title={title} />} >
      <img src={src} alt={title} />
    </CardMedia>
    <CardActions>
      <RaisedButton
        label="View all images"
        fullWidth
        onClick={() => getAlbumImages(id)}
      />
    </CardActions>
    <CardText>
      {description}
    </CardText>
  </Card>;

const mapStateToProps = (state, props) => {
  const album = state.getIn(['albums', props.id]);
  const imageId = album.get('cover');

  return ({
    title: album.get('title'),
    src: `http://i.imgur.com/${imageId}.png`,
    description: album.get('description'),
  });
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getAlbumImages: getAlbumImagesAction,
  }, dispatch);

const enhance = R.pipe(
  setPropTypes({
    src: React.PropTypes.string,
    description: React.PropTypes.string,
    title: React.PropTypes.string,
  }),
  connect(mapStateToProps, mapDispatchToProps),
  setDisplayName('AlbumCard'),
);


export { AlbumCard };
export default enhance(AlbumCard);
