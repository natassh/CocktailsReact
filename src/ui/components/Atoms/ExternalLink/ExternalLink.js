import React from 'react';
import PropTypes from 'prop-types';
import './ExternalLink.css';

function ExternalLink({ className = '', href, text }) {
  const classes = `${className} link`;
  return (
    <h3 className={classes}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </h3>
  );
}

export default ExternalLink;

ExternalLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string
};
