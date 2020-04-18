import React from 'react';
import { shallow } from 'enzyme';
import Suggested from './Suggested';
describe('Suggested', () => {
  it('should have a div', () => {
    const component = shallow(<Suggested />);
  
    expect(component.find('div').length).toBeEqual(1);
  });
});