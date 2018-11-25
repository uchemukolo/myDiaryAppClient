import React from 'react';
import { mount } from 'enzyme';
import { SignupForm } from '../../components/signup/SignupForm';
import '../setupTests';


jest.mock('react-router-dom');

const setup = () => {
  const props = {
    userSignupRequest: jest.fn(() => Promise.resolve())
  };

  const wrapper = mount(<SignupForm {...props} />);

  return {
    props,
    wrapper
  };
};
describe('Given SignUpForm component is mounted', () => {
  const { wrapper } = setup();

  describe('Validate user input when form is submited', () => {
    it('should throw error when no data is provided', () => {
      const event = {
        preventDefault: jest.fn(),
      };
      wrapper.instance().onSubmit(event);
      expect(wrapper.state().errors).toEqual(
        {
          email: 'This field is required',
          password: 'This field is required',
          username: 'This field is required',
          confirmPassword: 'This field is required'
        }
      );
    });

    it('should throw an error if email is not valid', () => {
      const event = {
        preventDefault: jest.fn(),
      };
      wrapper.setState({
        username: 'muche', email: 'wrongemailcom', password: 'qwerty', confirmPassword: 'qwerty'
      });
      wrapper.instance().onSubmit(event);
      expect(wrapper.state().errors).toEqual({ email: 'Email is invalid' });
    });
    it('should throw an error if password is not valid', () => {
      const event = {
        preventDefault: jest.fn(),
      };
      wrapper.setState({
        username: 'muche', email: 'muche@email.com', password: 'des', confirmPassword: 'qwerty'
      });
      wrapper.instance().onSubmit(event);
      expect(wrapper.state().errors).toEqual(
        {
          confirmPassword: 'Your password does not match',
          password: 'Your password needs to be longer than 6 characters'
        }
      );
    });
    it('should throw an error if username is not valid', () => {
      const event = {
        preventDefault: jest.fn(),
      };
      wrapper.setState({
        username: 'ayo', email: 'muche@email.com', password: 'qwerty', confirmPassword: 'qwerty'
      });
      wrapper.instance().onSubmit(event);
      expect(wrapper.state().errors).toEqual({ username: 'Username needs to be longer than 5 characters' });
    });
  });
});
