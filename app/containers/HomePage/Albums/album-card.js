import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setDisplayName, setPropTypes, withHandlers } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import R from 'ramda';

import { getAlbumImages as getAlbumImagesAction } from 'interactions/selection/actions';

const styles = {
  card: {
    margin: '5%',
  },
};

const AlbumCard = ({ title, src, description, onClick }) => // eslint-disable-line react/prop-types
  <Card style={styles.card}>
    <CardMedia overlay={<CardTitle title={title} />} >
      <img src={src} alt={title} />
    </CardMedia>
    <CardActions>
      <RaisedButton
        label="View all images"
        fullWidth
        onClick={onClick}
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
    onClick: React.PropTypes.func,
  }),
  withHandlers({
    onClick: (props) =>
      R.partial(props.getAlbumImages, [props.id]),
  }),
  connect(mapStateToProps, mapDispatchToProps),
  setDisplayName('AlbumCard'),
);


export { AlbumCard };
export default enhance(AlbumCard);
