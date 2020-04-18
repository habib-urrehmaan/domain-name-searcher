import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
describe('App', () => {
  it('check call back fires', () => {
    let mockFn = jest.fn();
    const component = shallow(<App/>);
    component.find('Search').props().setOuput = mockFn;
    component.find('Search').props().setOuput(); 
    expect(mockFn).toHaveBeenCalled();
  });
});