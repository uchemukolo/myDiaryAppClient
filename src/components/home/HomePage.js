import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HeaderContent from './HeaderContent';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { isAuth } = this.props;
    return (
      <div>
        <HeaderContent
          isAuthenticated={isAuth}
        />
      </div>

    );
  }
}
HomePage.propTypes = {
  isAuth: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  isAuth: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(HomePage);
