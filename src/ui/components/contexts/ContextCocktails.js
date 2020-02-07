import React, { createContext, useState, useEffect } from 'react';
import { getRecipesCocktail } from '../../../core/services/cocktails';
export const ContextCocktails = createContext();

const ProviderCocktails = props => {
  const [recipes, setRecipes] = useState([]);
  const [ingredientsFiltered, setIngredientsFiltered] = useState({
    category: 'Punch / Party Drink'
  });

  useEffect(() => {
    handleRecipes(ingredientsFiltered);
  }, [ingredientsFiltered]);

  const handleRecipes = async ingredientsFiltered => {
    const { category } = ingredientsFiltered;

    const recipesCocktails = await getRecipesCocktail(category);
    const recipes = recipesCocktails.drinks;
    setRecipes(recipes);
  };

  // Favorites
  const getInitialState = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    return favorites;
  };

  const saveFavoritesLocalstorage = favorites => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const [favorites, setFavorites] = useState(getInitialState());

  const setAddFavorite = cocktailObject => {
    const exists = favorites.find(
      favorite => favorite.idDrink === cocktailObject.idDrink
    );

    if (!exists) {
      const newFavs = [...favorites, cocktailObject];
      setFavorites(newFavs);
      saveFavoritesLocalstorage(newFavs);
    }
  };

  const setDeleteFavorite = cocktailObject => {
    const newFavs = favorites.filter(
      favorite => favorite.idDrink !== cocktailObject.idDrink
    );
    setFavorites(newFavs);
    saveFavoritesLocalstorage(newFavs);
  };

  const isFav = cocktail => {
    const exists = favorites.find(
      favorite => favorite.idDrink === cocktail.idDrink
    );

    if (exists) {
      return true;
    }
    return false;
  };

  return (
    <ContextCocktails.Provider
      value={{
        ingredientsFiltered,
        setIngredientsFiltered,
        recipes,
        setAddFavorite,
        isFav,
        favorites,
        setDeleteFavorite
      }}
    >
      {props.children}
    </ContextCocktails.Provider>
  );
};

export default ProviderCocktails;
