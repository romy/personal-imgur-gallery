import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import { LoginButton } from '../login-button';


describe('<LoginButton />', () => {
  it('should render RaisedButton', () => {
    const app = shallow(<LoginButton />);

    expect(app.find('RaisedButton').length).toEqual(1);
  });

  it('should render ActionExitToApp', () => {
    const app = shallow(<LoginButton />);

    expect(app.find('ActionExitToApp').length).toEqual(1);
  });
});
