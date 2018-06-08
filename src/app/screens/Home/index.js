import React, { Component, Fragment } from 'react';

import reactIcon from '../../../assets/react_icon.svg';

import './styles.css';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="body">
          <div className="react">
            <h1 className="title">Welcome to this page, this is my React Training!</h1>
            <img src={reactIcon} alt="React Icon" className="react-logo" />
            <p className="react-desc">
              React is a JavaScript library for building use interfaces. It is maintained by Facebook,
              Instagram and a community of individual developers and corporations. React can be used in th
              development of single-page applications and mobile applications. It aims primarily to provide
              speed, simplicity, and scalability. As a user interface library, React is often used in
              conjunction with other libraries such as Redux.
            </p>
          </div>
          <h2>Libraries and extras</h2>
          <div className="libraries">
            <div className="library">
              <h4>Redux</h4>
              <p>Redux is an open-source JavaScript library for managing application state.</p>
            </div>
            <div className="library">
              <h4>Redux-Forms</h4>
              <p>The best way to manage your form state in Redux.</p>
            </div>
            <div className="library">
              <h4>Redux-Thunk</h4>
              <p>
                Redux Thunk middleware allows you to write action creators that return a function instead of
                an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a
                certain condition is met.
              </p>
            </div>
            <div className="library">
              <h4>Higher order components</h4>
              <p>
                A higher-order component (HOC) is an advanced technique in React for reusing component logic.
                HOCs are not part of the React API, per se. They are a pattern that emerges from React’s
                compositional nature.
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Home;
