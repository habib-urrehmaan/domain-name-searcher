import React from 'react';
import { shallow } from 'enzyme';
import Suggested from './Suggested';
describe('Suggested', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<Suggested />);
  
    expect(component.find('div').length).toEqual(1);
  });
});