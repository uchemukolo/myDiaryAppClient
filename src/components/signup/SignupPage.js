import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SignupForm } from './SignupForm';
import { userSignupRequest } from '../../redux/actions/users/signup';

const SignupPage = ({ userSignupRequestAction, error, redirect }) => (
  <div className="container-signup">
    <SignupForm
      userSignupRequest={userSignupRequestAction}
      error={error}
      redirect={redirect}
    />
  </div>
);

SignupPage.propTypes = {
  userSignupRequestAction: PropTypes.func.isRequired,
  error: PropTypes.shape({}).isRequired,
  redirect: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  error: state.auth.error,
  redirect: state.auth.redirect
});

const mapDispatchToProps = dispatch => ({
  userSignupRequestAction: userData => dispatch(userSignupRequest(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
