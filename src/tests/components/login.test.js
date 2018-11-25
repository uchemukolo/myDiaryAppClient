import React from 'react';
import { mount } from 'enzyme';
import { LoginForm } from '../../components/login/LoginForm';


jest.mock('react-router-dom');

const setup = () => {
  const props = {
    userLoginRequest: jest.fn(() => Promise.resolve())
  };

  const wrapper = mount(<LoginForm {...props} />);

  return {
    props,
    wrapper
  };
};
describe('LoginForm component', () => {
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
        }
      );
    });

    it('should throw an error if email is not valid', () => {
      const event = {
        preventDefault: jest.fn(),
      };
      wrapper.setState({
        email: 'wrongemailcom', password: 'qwerty123'
      });
      wrapper.instance().onSubmit(event);
      expect(wrapper.state().errors).toEqual({ email: 'Your email is invalid' });
    });
    it('should throw an error if password is not valid', () => {
      const event = {
        preventDefault: jest.fn(),
      };
      wrapper.setState({
        email: 'muche@email.com', password: 'des',
      });
      wrapper.instance().onSubmit(event);
      expect(wrapper.state().errors).toEqual(
        {
          password: 'Your password must not be lass than 8 characters'
        }
      );
    });
  });
});
