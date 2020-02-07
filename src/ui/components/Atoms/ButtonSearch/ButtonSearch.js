import React from 'react';
import PropTypes from 'prop-types';
import './ButtonSearch.css';

const ButtonSearch = ({ type, value, className }) => (
  <input type={type} value={value} className={className} />
);
export default ButtonSearch;

ButtonSearch.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
};
