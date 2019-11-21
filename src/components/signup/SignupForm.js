import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import validateInput from './validations';

export class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      confirmPassword: '',
      password: '',
      errors: {},
      loading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value, errors: {} });
  }


  onSubmit(event) {
    event.preventDefault();
    const { userSignupRequest } = this.props;
    const { errors } = validateInput(this.state);
    const {
      username, email, password, confirmPassword
    } = this.state;

    if (
      errors.username
      || errors.email
      || errors.password
      || errors.confirmPassword) {
      this.setState(() => ({
        errors
      }));
    } else {
      userSignupRequest({
        username,
        email,
        password,
        confirmPassword
      });
      this.setState(() => ({
        errors: {},
      }));
    }
  }

  render() {
    const {
      username,
      email,
      password,
      confirmPassword,
      errors,
    } = this.state;
    const { redirect } = this.props;
    if (redirect) {
      return <Redirect to="/profile" />;
    }
    return (
      <form id="register-form" onSubmit={this.onSubmit}>
        <span id="heading">
          <h3>Register Now</h3>
        </span>
        <div className="row">
          <div className="input_field">
            {errors.username
            && (
            <p id="signup-error" className="CC">
              { errors.username }
            </p>
            )}
            <input
              value={username}
              onChange={this.onChange}
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="row">
          {errors.email
            && (
            <p id="signup-error" className="red-text">
              { errors.email }
            </p>
            )}
          <div className="input_field">
            <input
              value={email}
              onChange={this.onChange}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
            />
          </div>
        </div>
        <div className="row">
          <div className="input_field">
            {errors.password
            && (
            <p id="signup-error" className="red-text">
              { errors.password }
            </p>
            )}
            <input
              value={password}
              onChange={this.onChange}
              type="password"
              id="pword"
              name="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row">
          <div className="input_field">
            {errors.confirmPassword
            && (
            <p id="signup-error" className="red-text">
              { errors.confirmPassword }
            </p>
            )}
            <input
              value={confirmPassword}
              onChange={this.onChange}
              type="password"
              id="cpword"
              name="confirmPassword"
              placeholder="Confirm password"
            />
          </div>
        </div>
        <div className="row">
          <input
            type="submit"
            id="signupBtn"
            defaultValue="Sign Up"
          />
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired
};

export default SignupForm;
