import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import HomePage from '../index';


describe('<HomePage />', () => {
  it('should render MuiThemeProvider', () => {
    const app = shallow(<HomePage />);

    expect(app.find('MuiThemeProvider').length).toEqual(1);
  });

  it('should render Login', () => {
    const app = shallow(<HomePage />);

    expect(app.find('Login').length).toEqual(1);
  });
});
