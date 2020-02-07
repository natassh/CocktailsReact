import React from 'react';
import PropTypes from 'prop-types';
import './ButtonFavorite.css';

const ButtonFavorite = ({ type, value, className, onClick }) => (
  <input type={type} value={value} className={className} onClick={onClick} />
);
export default ButtonFavorite;

ButtonFavorite.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
