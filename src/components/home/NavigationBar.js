import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="topnav" id="myTopnav">
    <Link to="/" className="active">
    MY DIARY
    </Link>
    <Link to="/signup">Signup</Link>
    <Link to="/signin">Login</Link>
  </div>
);
