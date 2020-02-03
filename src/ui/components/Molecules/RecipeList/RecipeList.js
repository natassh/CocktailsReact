import React, { useContext } from 'react';
import { ContextDetailRecipe } from '../../contexts/ContextDetailRecipe';

import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import RecipeBox from '../../Atoms/RecipeBox';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  const { setIdCocktail } = useContext(ContextDetailRecipe);

  return (
    <section className="RecipeList">
      {recipes.map(recipe => {
        return (
          <Link
            to={`/recipe/${recipe.idDrink}`}
            key={recipe.idDrink}
            onClick={() => {
              setIdCocktail(recipe.idDrink);
            }}
          >
            <RecipeBox
              id={recipe.idDrink}
              name={recipe.strDrink}
              src={recipe.strDrinkThumb}
              alt={recipe.strDrink}
            />
          </Link>
        );
      })}
    </section>
  );
};

export default RecipeList;

RecipeList.propTypes = {
  recipes: PropTypes.array
};
