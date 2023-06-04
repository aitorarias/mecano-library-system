import React from 'react';
import PropTypes from 'prop-types';

const proptypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  icon: PropTypes.string.isRequired,
};

export const Icon = ({ className, icon, onClick }) => {
  return <i className={`icon ${icon} ${className}`} onClick={onClick} />;
};

Icon.propTypes = proptypes;
