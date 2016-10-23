import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { defaultProps, setDisplayName, setPropTypes } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import R from 'ramda';

import getAccountDataAction from 'interactions/user/actions';


const LoginButton = ({ getAccountData }) => // eslint-disable-line react/prop-types
  <RaisedButton
    label="Login with Imgur"
    fullWidth
    style={{ marginTop: '2%' }}
    onClick={getAccountData}
  >
    <ActionExitToApp />
  </RaisedButton>;

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getAccountData: getAccountDataAction,
  }, dispatch);

const enhance = R.pipe(
  defaultProps({
    getAccountData: () => {},
  }),
  setPropTypes({
    getAccountData: React.PropTypes.func,
  }),
  connect(null, mapDispatchToProps),
  setDisplayName('LoginButton'),
);


export { LoginButton };
export default enhance(LoginButton);
