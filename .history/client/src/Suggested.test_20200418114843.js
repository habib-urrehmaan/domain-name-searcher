import React from 'react';
import { shallow } from 'enzyme';
import Suggested from './Suggested';
describe('Suggested', () => {
  it('should have a div', () => {
    const component = shallow(<Suggested />);
  
    expect(component.find('div').length).toEqual(1);
  });

  it('can have a table',()=>{
    const component = shallow(<Suggested />);
  
    expect(component.find('table').length).toBeGreaterThan(-1);
  })
});