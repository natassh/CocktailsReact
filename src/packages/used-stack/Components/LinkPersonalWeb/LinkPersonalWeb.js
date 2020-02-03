import React from 'react';
import PropTypes from 'prop-types';

import './LinkPersonalWeb.css';

function LinkPersonalWeb({ href, text }) {
  return (
    <a
      href={href}
      className="link-web"
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
}

export default LinkPersonalWeb;

LinkPersonalWeb.propTypes = {
  href: PropTypes.string,
  text: PropTypes.string
};
