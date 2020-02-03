import React from 'react';
import PropTypes from 'prop-types';
import './RecipeBox.css';

function RecipeBox({ id, src, name, alt }) {
  return (
    <article className="RecipeList__RecipeBox" id={id}>
      <figure>
        <img src={src} alt={alt} />
      </figure>
      <h2>{name}</h2>
    </article>
  );
}
export default RecipeBox;

RecipeBox.propTypes = {
  id: PropTypes.string,
  src: PropTypes.string,
  name: PropTypes.string,
  alt: PropTypes.string
};
