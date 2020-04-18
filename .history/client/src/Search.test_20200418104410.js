import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
describe('Search', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Search debug />);
  
    expect(component).toMatchSnapshot();
  });
});