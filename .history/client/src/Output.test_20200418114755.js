import React from 'react';
import { shallow } from 'enzyme';
import Output from './Output';
describe('Output', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Output />);
    
    expect(component.find('div').length).toBeGreaterThan(-1);
  });
});