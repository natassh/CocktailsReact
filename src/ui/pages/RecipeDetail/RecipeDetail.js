import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getDetailRecipeCocktail } from '../../../core/services/cocktails';
import { ContextCocktails } from '../../components/contexts/ContextCocktails';
import ButtonFavorite from '../../components/Atoms/ButtonFavorite';
import FavoritesSection from '../../components/Molecules/FavoritesSection';
import './RecipeDetail.css';

const RecipeDetail = () => {
  const { isFav, setAddFavourite, favorites } = useContext(ContextCocktails);
  const { id } = useParams();
  const [recipe, setRecipeCocktail] = useState([]);

  useEffect(() => {
    handleDetailRecipeCocktail(id);
  }, [id]);

  const handleDetailRecipeCocktail = async id => {
    const detailRecipeCocktail = await getDetailRecipeCocktail(id);
    const recipe = detailRecipeCocktail.drinks[0];
    setRecipeCocktail(recipe);
  };

  const showIngredients = recipe => {
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

  const handleFavorites = () => {
    setAddFavourite(recipe);
  };

  if (recipe !== undefined) {
    const nameCocktail = recipe.strDrink;
    const category = recipe.strCategory;
    const instructions = recipe.strInstructions;
    const image = recipe.strDrinkThumb;
    return (
      <>
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
              <ul>{showIngredients(recipe)}</ul>
            </div>
            <div className="BoxDetail__buttons">
              <Link to={`/`} className="return">
                Volver al buscador
              </Link>
              {!isFav(recipe) && (
                <ButtonFavorite
                  type="button"
                  value="Añadir a favoritos"
                  onClick={handleFavorites}
                />
              )}
            </div>
          </div>
        </article>
        <FavoritesSection favoritesCocktails={favorites} />
      </>
    );
  } else {
    return null;
  }
};

export default RecipeDetail;
