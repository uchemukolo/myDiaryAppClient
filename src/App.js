import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from './components/Routes';

const App = () => (
  <BrowserRouter>
    <Route component={Routes} />
  </BrowserRouter>
);

export default App;
