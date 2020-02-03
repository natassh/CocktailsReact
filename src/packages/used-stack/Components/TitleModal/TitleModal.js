import React from 'react';
import PropTypes from 'prop-types';

import './TitleModal.css';

function TitleModal({ text }) {
  return <h2 className="modal__title">{text}</h2>;
}

export default TitleModal;

TitleModal.propTypes = {
  text: PropTypes.string
};
