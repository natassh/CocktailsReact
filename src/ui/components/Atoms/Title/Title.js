import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ className, children }) => (
  <h1 className={className}>{children}</h1>
);

export default Title;

Title.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};
