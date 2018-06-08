import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import localStorageService from '../../../services/localStorageService';

import './styles.css';

class Topbar extends Component {
  logOut = () => {
    localStorageService.removeToken();
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

export default Topbar;
