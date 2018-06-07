import React from 'react';
import PropTypes from 'prop-types';

export const customInput = props => {
  const { meta } = props;
  return (
    <div>
      <label htmlFor={props.label}>
        {props.label}
        <input {...props.input} name={props.label} type={props.type} />
      </label>
      {meta.error && meta.touched && <div style={{ color: 'red' }}>{meta.error}</div>}
    </div>
  );
};

customInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.string
  }),
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool
  })
};
