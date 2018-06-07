import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { required, minLength, email } from '../../components/Validation';
import { customInput } from '../../components/fields';
import './styles.css';

function Login({ handleSubmit, formValidity }) {
  return (
    <form>
      <h1> Welcome to Login </h1>
      <Field name="email" component={customInput} type="text" label="Email" validate={[required, email]} />
      <Field
        name="password"
        component={customInput}
        type="password"
        label="Password"
        validate={[required, minLength]}
      />
      <button type="submit" onClick={handleSubmit} disable={formValidity}>
        <Link to="/game" href="/game">
          Login
        </Link>
      </button>
    </form>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func,
  formValidity: PropTypes.bool
};

export default reduxForm({ form: 'login' })(Login);
