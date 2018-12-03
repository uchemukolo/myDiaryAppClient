/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/users/login';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { auth, logout: handleLogout } = this.props;
    return (
      <div className="topnav" id="myTopnav">
        <Link to="/" className="active">MY DIARY</Link>
        {
          auth.isAuthenticated
            ? (
              <div>
                <Link to="/entries">My Entries</Link>
                <Link to="/add-entry">Add New Entry</Link>
                <Link onClick={handleLogout} to="/">Logout</Link>
              </div>
            )
            : (
              <div>
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Login</Link>
              </div>
            )
        }
      </div>
    );
  }
}
NavigationBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(NavigationBar);
