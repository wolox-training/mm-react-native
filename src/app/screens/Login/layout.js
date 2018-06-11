import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import { required, minLength, email } from '../../components/Validation';
import CustomInput from '../../components/CustomInput';
import withLoading from '../WithLoading';
import { LOGINFIELDS } from '../../../constants/loginFields';

import { strings } from './strings';

import './styles.css';

function Login({ handleSubmit, disableSubmit }) {
  return (
    <form>
      <h1> {strings.welcome} </h1>
      <Field
        name={LOGINFIELDS.EMAIL}
        component={CustomInput}
        type={strings.type_email}
        label={strings.email}
        validate={[required, email]}
      />
      <Field
        name={LOGINFIELDS.PASSWORD}
        component={CustomInput}
        type={strings.type_password}
        label={strings.password}
        validate={[required, minLength]}
      />
      <button type={strings.submit} onClick={handleSubmit} disabled={disableSubmit}>
        Login
      </button>
    </form>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  disableSubmit: PropTypes.bool
};

export default reduxForm({ form: LOGINFIELDS.FORM_NAME })(withLoading(Login));
