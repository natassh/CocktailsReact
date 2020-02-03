import React from 'react';
import PropTypes from 'prop-types';

import CloseButton from '../CloseButton/CloseButton';
import TitleModal from '../TitleModal/TitleModal';
import LinkPersonalWeb from '../LinkPersonalWeb/LinkPersonalWeb';
import ListStack from '../ListStack/ListStack';

import './Modal.css';

const Modal = ({ onClose }) => {
  const handleCloseButtonClick = e => {
    e.preventDefault();
    onClose();
  };

  return (
    <aside className="modal">
      <div className="modal__container">
        <CloseButton text="X" onClick={handleCloseButtonClick} />
        <article className="modal__content">
          <TitleModal text="Proyecto desarrollado con:" />
          <ListStack />
        </article>
        <LinkPersonalWeb
          href="https://natassh.github.io/myweb/"
          text="¿ Quieres saber más sobre mi ?"
        />
      </div>
    </aside>
  );
};

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func
};
