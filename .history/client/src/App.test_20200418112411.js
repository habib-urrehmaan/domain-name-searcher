import React from 'react';
import { mount } from 'enzyme';
import App from './App';
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = mount(<App debug />);
  
    expect(component).toMatchSnapshot();
  });
});