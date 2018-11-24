import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';
import SignupPage from './signup/SignupPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/signup" component={SignupPage} />
  </Switch>
);

// Routes.PropTypes = {
//   location:PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   }).isRequired,
// };

export default Routes;
