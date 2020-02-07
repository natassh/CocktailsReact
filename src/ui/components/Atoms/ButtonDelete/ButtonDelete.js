import React from 'react';
import PropTypes from 'prop-types';
import './ButtonDelete.css';

const ButtonDelete = ({ type, value, className, onClick }) => (
  <input type={type} value={value} className={className} onClick={onClick} />
);
export default ButtonDelete;

ButtonDelete.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};
