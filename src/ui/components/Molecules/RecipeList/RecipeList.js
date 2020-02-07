import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipeBox from '../../Atoms/RecipeBox';
import './RecipeList.css';

const RecipeList = ({ recipes }) => {
  return (
    <section className="RecipeList">
      {recipes.map(recipe => {
        return (
          <Link to={`/recipe/${recipe.idDrink}`} key={recipe.idDrink}>
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
