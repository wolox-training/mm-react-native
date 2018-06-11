import React from 'react';
import PropTypes from 'prop-types';

import { strings } from './strings.js';
import './styles.css';

function withLoading(WrappedComponent) {
  return function LoadingComponent(props) {
    LoadingComponent.propTypes = {
      isLoading: PropTypes.bool
    };

    return props.isLoading ? (
      <h1 className="loading">{strings.isLoading}</h1>
    ) : (
      <WrappedComponent {...props} />
    );
  };
}

export default withLoading;
