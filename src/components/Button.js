import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ handleClick, label }) => (
  <button onClick={handleClick} type="button" className="button">
    {label}
  </button>
);

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default Button;
