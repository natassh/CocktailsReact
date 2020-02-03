import React from 'react';
import PropTypes from 'prop-types';

import './CloseButton.css';

function CloseButton({ text, onClick }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a href="#" className="close-btn" onClick={onClick}>
      {text}
    </a>
  );
}

export default CloseButton;

CloseButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func
};
