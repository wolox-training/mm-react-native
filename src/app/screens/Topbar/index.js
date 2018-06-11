import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import localStorageService from '../../../services/localStorageService';
import loginActions from '../../redux/Login/actions';

import './styles.css';

class Topbar extends Component {
  logOut = () => {
    localStorageService.removeToken();
    this.props.dispatch(loginActions.logout());
  };

  render() {
    return (
      <nav className="topbar">
        <Link to="/home" href="/home" className="link">
          Home
        </Link>
        <Link to="/game" href="/game" className="link">
          Game
        </Link>
        <Link href="login" to="login" className="logout">
          <button className="logout-button" onClick={this.logOut}>
            Log Out
          </button>
        </Link>
      </nav>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Topbar);
