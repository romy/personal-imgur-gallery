import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { defaultProps, setDisplayName, setPropTypes } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import R from 'ramda';

import getImgurTokenAction from '../../../interactions/imgur/actions';


const Login = ({ getImgurToken }) => // eslint-disable-line react/prop-types
  <RaisedButton
    label="login with imgur"
    fullWidth
    style={{ marginTop: '15%' }}
    onClick={getImgurToken}
  >
    <ActionExitToApp />
  </RaisedButton>;

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getImgurToken: getImgurTokenAction,
  }, dispatch);

const enhance = R.pipe(
  defaultProps({
    getImgurToken: () => {},
  }),
  setPropTypes({
    getImgurToken: React.PropTypes.func,
  }),
  connect(null, mapDispatchToProps),
  setDisplayName('Login'),
);


export { Login };
export default enhance(Login);
