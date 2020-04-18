import React from 'react';
import { shallow } from 'enzyme';
import Search from './Search';
describe('Search', () => {
  it('should have a search input field', () => {
    const component = shallow(<Search />);
  
    expect(component.find('input').length).toEqual(1);
  });
});