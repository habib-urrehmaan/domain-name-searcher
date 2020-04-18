import React from 'react';
import { shallow } from 'enzyme';
import Output from './Output';
describe('Output', () => {
  it('should have atleast a div', () => {
    const component = shallow(<Output />);
    
    expect(component.find('div').length).toBeGreaterThan(0);
  });
});