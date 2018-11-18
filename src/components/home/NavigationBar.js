import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <div className="topnav" id="myTopnav">
    <Link to="/" className="active">
    MY DIARY
    </Link>
    <Link to="public/signup.html">Signup</Link>
    <Link to="public/signin.html">Login</Link>
  </div>
);
