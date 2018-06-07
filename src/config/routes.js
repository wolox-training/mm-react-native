import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../app/screens/Login';
import Game from '../app/screens/Game';
import localStorageService from '../services/localStorageService';

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
    <Router>
      <Switch>
        <Route exact path="/home" component={Game} />
      </Switch>
    </Router>
  );
}

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/home" component={Layout} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
