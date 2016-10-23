import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

import Welcome from '../index';


describe('<Welcome />', () => {
  it('should have a header', () => {
    const app = shallow(<Welcome />);

    expect(app.find('h1').length).toEqual(1);
  });

  it('should render Login', () => {
    const app = shallow(<Welcome />);

    expect(app.find('Login').length).toEqual(1);
  });
});
