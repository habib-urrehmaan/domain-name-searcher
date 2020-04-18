import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = mount(<App setOutput={()=>{console.log("hello")}} debug />);
  
    expect(component).toMatchSnapshot();
  });
});