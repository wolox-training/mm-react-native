import React, { Component, Fragment } from 'react';

import reactIcon from '../../../assets/react_icon.svg';

import { strings } from './strings.js';
import './styles.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="body">
          <div className="react">
            <h1 className="title">{strings.pageTitle}</h1>
            <img src={reactIcon} alt="React Icon" className="react-logo" />
            <p className="react-desc">{strings.reactDesc}</p>
          </div>
          <h2>{strings.subtitle}</h2>
          <div className="libraries">
            <div className="library">
              <h4>{strings.redux}</h4>
              <p>{strings.reduxDesc}</p>
            </div>
            <div className="library">
              <h4>{strings.reduxForm}</h4>
              <p>{strings.reduxFormDesc}</p>
            </div>
            <div className="library">
              <h4>{strings.reduxThunk}</h4>
              <p>{strings.reduxThunkDesc}</p>
            </div>
            <div className="library">
              <h4>{strings.hoc}</h4>
              <p>{strings.hocDesc}</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
