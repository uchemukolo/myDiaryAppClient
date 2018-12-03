import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavigationBar from './home/NavigationBar';
import Footer from './home/Footer';
import HomePage from './home/HomePage';
import SignupPage from './signup/SignupPage';
import LoginPage from './login/LoginPage';
import AddEntryForm from './entry/AddEntryForm';
import GetEntries from './entry/GetEntries';
import EntryDetail from './entry/EntryDetail';

const Routes = () => (
  <BrowserRouter>
    <div id="wrap">
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/entries" component={GetEntries} />
        <Route exact path="/signup" component={SignupPage} />
        <Route exact path="/signin" component={LoginPage} />
        <Route exact path="/add-entry" component={AddEntryForm} />
        <Route exact path="/entry-detail/:id" component={EntryDetail} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

// Routes.PropTypes = {
//   location:PropTypes.shape({
//     pathname: PropTypes.string.isRequired
//   }).isRequired,
// };

export default Routes;
