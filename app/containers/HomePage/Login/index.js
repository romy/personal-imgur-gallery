import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';


const Login = () =>
  <RaisedButton
    label="login with imgur"
    fullWidth
    style={{ marginTop: '15%' }}
  >
    <ActionExitToApp />
  </RaisedButton>;

Login.displayName = 'Login';


export default Login;
