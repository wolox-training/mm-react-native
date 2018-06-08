import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../app/screens/Login';
import Home from '../app/screens/Home';
import Game from '../app/screens/Game';
import localStorageService from '../services/localStorageService';
import Topbar from '../app/screens/Topbar';

import api from './api';

function isLoggedIn() {
  const token = localStorageService.getToken();
  if (token) {
    api.setHeaders({ token });
    return true;
  }
  return false;
}

function Layout() {
  if (!isLoggedIn()) {
    return <Redirect to="/login" />;
  }
  return (
    <Fragment>
      <Topbar />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/game" component={Game} />
      </Switch>
    </Fragment>
  );
}

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Layout} />
        <Route path="/game" component={Layout} />
        <Redirect from="/" to="/home" />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
