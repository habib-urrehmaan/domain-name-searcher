import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
describe('Search', () => {
  it('renders a search input field', () => {
    const component = shallow(<Search debug />);
  
    expect(component.find('input').length).toEqual(1);
  });
});