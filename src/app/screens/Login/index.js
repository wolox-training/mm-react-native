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
    this.props.history.push('/home');
  };

  handleSubmit = event => {
    if (this.props.token) this.navigateToGame();
    this.props.dispatch(loginActions.login(event, this.navigateToGame));
  };

  render() {
    return (
      <Login
        onSubmit={this.handleSubmit}
        disableSubmit={this.props.invalid}
        isLoading={this.props.isLoading}
      />
    );
  }
}

LoginContainer.propTypes = {
  history: ReactRouterPropTypes.history.isRequired,
  invalid: PropTypes.bool,
  token: PropTypes.string,
  isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  isLoading: state.login.isLoading,
  invalid: isInvalid('login')(state)
});

export default connect(mapStateToProps)(withRouter(LoginContainer));
