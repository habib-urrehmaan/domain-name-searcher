import React from 'react';
import { mount } from 'enzyme';
import App from './App';
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    let mockFn = jest.fn();
    const component = mount(<App/>);
    component.instance().setAppOutput = mockFn;
    component.find('Search').props().setOuput();
    expect(mockFn).toHaveBeenCalled();
  });
});