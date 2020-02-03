import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextDetailRecipe } from '../../components/contexts/ContextDetailRecipe';

import './RecipeDetail.css';

const RecipeDetail = () => {
  const { recipeCocktail, setRecipeCocktail, setIdCocktail } = useContext(
    ContextDetailRecipe
  );

  const recipe = recipeCocktail[0];

  const showIngredients = recipeCocktail => {
    const recipe = recipeCocktail[0];
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={i++}>
            {recipe[`strIngredient${i}`]} : {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return ingredients;
  };

  if (recipe !== undefined) {
    const nameCocktail = recipe.strDrink;
    const category = recipe.strCategory;
    const instructions = recipe.strInstructions;
    const image = recipe.strDrinkThumb;
    return (
      <article className="BoxDetail">
        <figure>
          <img src={image} alt={nameCocktail} />
        </figure>
        <div>
          <h2>{nameCocktail}</h2>
          <p>
            <strong>Category: </strong> {category}
          </p>
          <p>
            <strong>Recipe: </strong> {instructions}
          </p>
          <div>
            <strong>Ingredients and Quantities: </strong>
            <ul>{showIngredients(recipeCocktail)}</ul>
          </div>

          <Link
            to={`/`}
            className="return"
            onClick={() => {
              setIdCocktail(null); // Limpiamos el state para que cargue solo la pulsada y no tb la anterior
              setRecipeCocktail([]); // Lo mismo
            }}
          >
            Volver al buscador
          </Link>
        </div>
      </article>
    );
  } else {
    return (
      <article className="BoxDetail">
        <div>
          <Link to={`/`} className="return">
            Volver al buscador
          </Link>
        </div>
      </article>
    );
  }
};

export default RecipeDetail;
