import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Login from '../index';


describe('<Login />', () => {
  it('should render RaisedButton', () => {
    const app = shallow(<Login />);

    expect(app.find('RaisedButton').length).toEqual(1);
  });

  it('should render ActionExitToApp', () => {
    const app = shallow(<Login />);

    expect(app.find('ActionExitToApp').length).toEqual(1);
  });
});
