import React from 'react';
import PropTypes from 'prop-types';

function withLoading(WrappedComponent) {
  return function LoadingComponent(props) {
    LoadingComponent.propTypes = {
      isLoading: PropTypes.bool
    };

    if (!props.isLoading) return <WrappedComponent {...props} />;
    return <p>Loading, please wait...</p>;
  };
}

export default withLoading;
