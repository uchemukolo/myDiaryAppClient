import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderContent = ({ isAuthenticated }) => (
  <div>
    <div className="main">
      <h1>It's Personal</h1>
      <span>
        <h2>"Express yourself a way only you can"</h2>
      </span>
      <div className="headline">
        <h4>EMPTY YOUR HEAD. PRIVATELY.</h4>
      </div>
    </div>
    {
      isAuthenticated === false
      && (
      <div className="main-signup-button">
        <button type="button" className="button">
          <Link to="/signup">
            <span>Register! Its Free </span>
          </Link>
        </button>
      </div>
      )
    }
  </div>
);

HeaderContent.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};
export default HeaderContent;
