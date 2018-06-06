import React, { Component } from 'react';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = values => {
    console.log(values);
  };

  render() {
    return <Login onSubmit={this.handleSubmit} />;
  }
}

export default LoginContainer;
