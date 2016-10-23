import React from 'react';

import LoginButton from './login-button';

const styles = {
  header: {
    marginTop: '5%',
    fontSize: '600%',
  },
};

const Welcome = () =>
  <div>
    <h1 style={styles.header}>Imgur Gallery</h1>
    <div>View your albums and images from Imgur</div>
    <LoginButton />
  </div>;

Welcome.displayName = 'Welcome';


export default Welcome;
