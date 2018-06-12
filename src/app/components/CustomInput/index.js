import React from 'react';
import PropTypes from 'prop-types';

function CustomInput(props) {
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
}

CustomInput.propTypes = {
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

export default CustomInput;
