import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

let proptypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md', 'sm']),
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export const Button = ({ onClick, label, leftIcon, rightIcon, size, disabled, type }) => {
  return (
    <button
      className={`button-container button-container--size-${size}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {leftIcon && <i className={`${leftIcon} la-${size}`} />}
      {label}
      {rightIcon && <i className={`${rightIcon} la-${size}`} />}
    </button>
  );
};

Button.propTypes = proptypes;
