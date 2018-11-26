import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoginForm } from './LoginForm';
import { userLoginRequest } from '../../redux/actions/users/login';

const LoginPage = ({ userLoginRequestAction, error, redirect }) => (
  <div>
    <div className="container_signin">
      <LoginForm
        userLoginRequest={userLoginRequestAction}
        error={error}
        redirect={redirect}
      />
    </div>
  </div>
);

LoginPage.propTypes = {
  userLoginRequestAction: PropTypes.func.isRequired,
  error: PropTypes.shape({}).isRequired,
  redirect: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  error: state.auth.error,
  redirect: state.auth.redirect
});

const mapDispatchToProps = dispatch => ({
  userLoginRequestAction: userDetails => dispatch(userLoginRequest(userDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
