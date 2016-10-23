import { connect } from 'react-redux';
import { GridTile } from 'material-ui/GridList';
import Immutable from 'immutable';
import React from 'react';
import R from 'ramda';
import { setDisplayName, setPropTypes } from 'recompose';


const ImageTile = ({ title, link, description }) => // eslint-disable-line react/prop-types
  <GridTile
    key={link}
    title={title}
    subtitle={description}
  >
    <img src={link} alt={title} />
  </GridTile>;

const mapStateToProps = (state, props) => {
  const image = state.getIn(
    ['albums', props.albumId, 'images', props.id],
    Immutable.Map()  // eslint-disable-line new-cap
  );

  return ({
    title: image.get('title'),
    link: image.get('link'),
    description: image.get('description'),
  });
};

const enhance = R.pipe(
  setPropTypes({
    title: React.PropTypes.string,
    link: React.PropTypes.string,
    description: React.PropTypes.string,
  }),
  connect(mapStateToProps),
  setDisplayName('ImageTile'),
);


export { ImageTile };
export default enhance(ImageTile);
