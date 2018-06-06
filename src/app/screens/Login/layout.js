import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { required, minLength, email } from '../../components/Validation';
import { customInput } from '../../components/fields';
import './styles.css';

function Login({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <h1> Welcome to Login </h1>
      <Field name="email" component={customInput} type="text" label="Email" validate={[required, email]} />
      <Field
        name="password"
        component={customInput}
        type="password"
        label="Password"
        validate={[required, minLength]}
      />
      <button>
        <Link to="/game" href="/">
          Login
        </Link>
      </button>
    </form>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({ form: 'login' })(Login);
