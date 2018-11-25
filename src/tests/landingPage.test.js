import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../components/home/HomePage';
// import '../setupTests';

jest.mock('react-router-dom');


describe('Home Page component', () => {
  const wrapper = mount(<HomePage />);

  it('always render successfully', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });
});
