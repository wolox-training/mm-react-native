import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import localStorageService from '../../../services/localStorageService';
import loginActions from '../../redux/Login/actions';
import { ROUTES } from '../../../constants/routes';

import { strings } from './strings.js';
import './styles.css';

class Topbar extends Component {
  logOut = () => {
    localStorageService.removeToken();
    this.props.dispatch(loginActions.logout());
  };

  render() {
    return (
      <nav className="topbar">
        <Link to={ROUTES.HOME} href={ROUTES.HOME} className="link">
          {strings.home}
        </Link>
        <Link to={ROUTES.GAME} href={ROUTES.GAME} className="link">
          {strings.game}
        </Link>
        <Link href={ROUTES.LOGIN} to={ROUTES.LOGIN} className="logout">
          <button className="logout-button" onClick={this.logOut}>
            {strings.logout}
          </button>
        </Link>
      </nav>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(Topbar);
