import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

let proptypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
};

export const Button = ({ onClick, label, leftIcon, rightIcon }) => {
  return (
    <button className="button-container" onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = proptypes;
