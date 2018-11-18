import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
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
    <div className="main-signup-button">
      <button type="button" className="button">
        <Link to="public/signup.html">
          <span>Register! Its Free </span>
        </Link>
      </button>
    </div>
  </div>
);