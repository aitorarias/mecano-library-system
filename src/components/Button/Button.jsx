import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

let proptypes = {
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  leftIcon: PropTypes.string,
  rightIcon: PropTypes.string,
};

export const Button = ({ onClick, title, leftIcon, rightIcon }) => {
  return (
    <button className="button-container" onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = proptypes;
