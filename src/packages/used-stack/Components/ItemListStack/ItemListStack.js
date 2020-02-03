import React from 'react';
import PropTypes from 'prop-types';

import './ItemListStack.css';

function ItemListStack({ src, alt, title, content }) {
  return (
    <li>
      <figure>
        <img src={src} alt={alt} />
      </figure>
      <h3>{title}</h3>
      <p>{content}</p>
    </li>
  );
}

export default ItemListStack;

ItemListStack.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string
};
