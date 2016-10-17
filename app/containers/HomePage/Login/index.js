import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import { defaultProps, setDisplayName, setPropTypes } from 'recompose';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import R from 'ramda';


const Login = () =>
  <RaisedButton
    label="login with imgur"
    fullWidth
    style={{ marginTop: '15%' }}
  >
    <ActionExitToApp />
  </RaisedButton>;

const enhance = R.pipe(
  defaultProps({
    getImgurToken: () => {},
  }),
  setPropTypes({
    getImgurToken: React.PropTypes.func,
  }),
  setDisplayName('Login'),
);


export { Login };
export default enhance(Login);
