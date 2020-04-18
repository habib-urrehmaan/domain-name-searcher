import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it('check call back fires', () => {
    let mockFn = jest.fn();
    const component = mount(<App/>);
    component.find('Search').props().setOuput = mockFn;
    component.find('Search').props().setOuput(); 
    expect(mockFn).toHaveBeenCalled();
  });
});