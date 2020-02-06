import React, { createContext, useState, useEffect } from 'react';

import { getRecipesCocktail } from '../../../core/services/cocktails';

// Crear el Context
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
  const [favorites, setFavorites] = useState([]);
  //console.log({ favorites });

  const setAddFavourite = idCocktail => {
    //console.log('idCocktail', idCocktail);
    //console.log('before favorites', favorites);
    if (!favorites.includes(idCocktail)) {
      const newFavs = [...favorites, idCocktail];
      //console.log('after favorites', newFavs);
      setFavorites(newFavs);
    }
  };
  console.log({ favorites });

  const isFav = recipe => {
    if (favorites.includes(recipe)) {
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
        setAddFavourite,
        isFav,
        favorites
      }}
    >
      {props.children}
    </ContextCocktails.Provider>
  );
};

export default ProviderCocktails;
