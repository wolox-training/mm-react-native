import React, { Component } from 'react';
import { isInvalid } from 'redux-form';
import { connect } from 'react-redux';

// import loginActions from '../../redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = event => {
    console.log(`asdasd${this.props}`);
  };

  render() {
    return <Login onSubmit={this.handleSubmit} disableSubmit={this.isInvalid} />;
  }
}

const mapStateToProps = store => ({
  invalid: isInvalid('login')(store)
});

export default connect(mapStateToProps)(LoginContainer);
