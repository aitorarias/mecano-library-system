import React from 'react';
import PropTypes from 'prop-types';

import './TextInput.scss';

let proptypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel', 'url']).isRequired,
  disabled: PropTypes.bool,
  helper: PropTypes.string,
};

export const TextInput = ({ label, type, disabled, helper }) => {
  return (
    <div className={`textinput textinput-container`}>
      <label htmlFor="label" className={`textinput__label`}>
        {label}
      </label>
      <div className="textinput__input--container">
        <input id="label" className={`textinput__input`} type={type} disabled={disabled} />
      </div>
      <p>{helper}</p>
    </div>
  );
};

TextInput.propTypes = proptypes;
