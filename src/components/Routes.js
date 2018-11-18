import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './home/HomePage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
  </Switch>
);

// Routes.PropTypes = {
//   location:PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   }).isRequired,
// }

export default connect()(Routes);
