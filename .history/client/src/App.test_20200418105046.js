import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Search debug />);
  
    expect(component).toMatchSnapshot();
  });
});