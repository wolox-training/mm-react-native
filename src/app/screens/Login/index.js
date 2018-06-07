import React, { Component } from 'react';
import { connect } from 'redux-form';

import loginActions from '../../redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  handleSubmit = event => {
    return event ? loginActions.GET_USERS : null;
  };

  validateForm = event => {

    console.log(event);
  };

  render() {
    return <Login onSubmit={this.handleSubmit} formValidity={this.formValidity} />;
  }
}

const mapStateToProps = store => ({
  email: store.form.value,
  password: store.form.password
});

export default connect(mapStateToProps)(LoginContainer);
