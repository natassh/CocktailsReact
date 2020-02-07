import React from 'react';
import PropTypes from 'prop-types';
import RecipeBox from '../../Atoms/RecipeBox';
import './FavoritesSection.css';

const FavoritesSection = ({ favoritesCocktails }) => {
  return (
    <aside className="FavoritesSection">
      <h3>Favoritos</h3>
      <div>
        {favoritesCocktails.map(recipe => {
          return (
            <RecipeBox
              key={recipe.idDrink}
              id={recipe.idDrink}
              name={recipe.strDrink}
              src={recipe.strDrinkThumb}
              alt={recipe.strDrink}
            />
          );
        })}
      </div>
    </aside>
  );
};

export default FavoritesSection;

FavoritesSection.propTypes = {
  favoritesCocktails: PropTypes.array
};
