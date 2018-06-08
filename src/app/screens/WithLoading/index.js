import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

function withLoading(WrappedComponent) {
  return function LoadingComponent(props) {
    LoadingComponent.propTypes = {
      isLoading: PropTypes.bool
    };

    if (!props.isLoading) return <WrappedComponent {...props} />;
    return <h1 className="loading">Loading, please wait...</h1>;
  };
}

export default withLoading;
