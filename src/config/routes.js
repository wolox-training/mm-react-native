import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Login from '../app/screens/Login';
import Home from '../app/screens/Home';
import Game from '../app/screens/Game';
import localStorageService from '../services/localStorageService';
import Topbar from '../app/screens/Topbar';
import { ROUTES } from '../constants/routes';

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
    return <Redirect to={ROUTES.LOGIN} />;
  }
  return (
    <Fragment>
      <Topbar />
      <Switch>
        <Route path={ROUTES.HOME} component={Home} />
        <Route path={ROUTES.GAME} component={Game} />
      </Switch>
    </Fragment>
  );
}

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login} />
        <Route path={ROUTES.HOME} component={Layout} />
        <Route path={ROUTES.GAME} component={Layout} />
        <Redirect from="/" to={ROUTES.HOME} />
      </Switch>
    </Router>
  );
}

export default AppRoutes;
