/* eslint-disable react/forbid-prop-types */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { logout } from '../../redux/actions/users/login';
import icons from '../../static/icons.svg';


class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ responsive: !prevState.responsive }));
  }

  render() {
    const { auth, logout: handleLogout } = this.props;
    const { responsive } = this.state;
    return (
      <div className={`topnav ${responsive ? 'responsive' : ''}`} id="myTopnav">
        <Link to="/" className="active">MY DIARY</Link>
        {
          auth.isAuthenticated
            ? (
              <div className="large">
                <Link to="/profile">Home</Link>
                <Link to="/entries">My Entries</Link>
                <Link to="/add-entry">Add New Entry</Link>
                <Link onClick={handleLogout} to="/">Logout</Link>
              </div>
            )
            : (
              <div className="large">
                <Link to="/signup">Signup</Link>
                <Link to="/signin">Login</Link>
              </div>
            )
        }
        <svg className="icon" onClick={this.toggle}>
          <use xlinkHref={`${icons}#bars`} />
        </svg>
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
