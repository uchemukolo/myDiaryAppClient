import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import swal from 'sweetalert';
import validateInput from './validations';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value, errors: {} });
  }


  onSubmit(event) {
    event.preventDefault();
    const { userLoginRequest } = this.props;
    const { errors } = validateInput(this.state);
    const {
      email, password
    } = this.state;

    if (errors.email || errors.password) {
      this.setState(() => ({
        errors
      }));
      swal('Oops!', 'Something went wrong!', 'error');
    } else {
      userLoginRequest({
        email,
        password
      });
      this.setState(() => ({
        errors: {},
      }));
    }
  }

  render() {
    const {
      email,
      password,
      errors,
    } = this.state;
    const { redirect } = this.props;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <form id="signin-form" onSubmit={this.onSubmit}>
        <h3 id="heading">Log In</h3>
        <div className="row">
          <div className="input_field">
            {errors.email
            && (
            <p id="signin-error" className="red-text">
              { errors.email }
            </p>
            )}
            <input
              value={email}
              onChange={this.onChange}
              type="text"
              id="email"
              name="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row">
          <div className="input_field">
            {errors.password
            && (
            <p id="signin-error" className="red-text">
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
          <input type="submit" id="signinBtn" defaultValue="Signin" />
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  userLoginRequest: PropTypes.func.isRequired,
  redirect: PropTypes.bool.isRequired
};

export default LoginForm;
