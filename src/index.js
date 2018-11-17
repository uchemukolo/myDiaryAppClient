import React from 'react';
import ReactDOM from 'react-dom';
import './myStyle.scss';

const App = () => (
  <div className="background">
    <div className="topnav" id="myTopnav">
      <h1 className="active">
        MY DIARY
      </h1>
    </div>
    <div className="footer">
      <h6>© Copyright 2018 Template By Muche - All Rights Reserved.</h6>
    </div>
  </div>

);

ReactDOM.render(<App />, document.getElementById('app'));
