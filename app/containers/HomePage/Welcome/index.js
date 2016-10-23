import React from 'react';

import Login from '../Login';


const Welcome = () =>
  <div>
    <h1 style={{ marginTop: '5%', fontSize: '600%' }}>Imgur Gallery</h1>
    <div>View your albums and images from Imgur</div>
    <Login />
  </div>;

Welcome.displayName = 'Welcome';


export default Welcome;
