import React, { Component } from 'react';
import { isInvalid } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import PropTypes from 'prop-types';

import loginActions from '../../redux/Login/actions';

import Login from './layout';

class LoginContainer extends Component {
  navigateToGame = () => {
    this.props.history.push('/game');
  };

  handleSubmit = event => {
    this.props.dispatch(loginActions.login(event, this.navigateToGame));
  };

  render() {
    return <Login onSubmit={this.handleSubmit} disableSubmit={this.props.invalid} />;
  }
}

LoginContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  invalid: PropTypes.bool
};

const mapStateToProps = store => ({
  invalid: isInvalid('login')(store)
});

export default connect(mapStateToProps)(withRouter(LoginContainer));
