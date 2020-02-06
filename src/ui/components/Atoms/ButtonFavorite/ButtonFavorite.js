import React from 'react';
import PropTypes from 'prop-types';
import './ButtonFavorite.css';

const ButtonFavorite = ({ type, value, onClick }) => (
  <input
    type={type}
    value={value}
    className="BloggerSearchForm__ButtonSearch"
    onClick={onClick}
  />
);
export default ButtonFavorite;

ButtonFavorite.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string
};
