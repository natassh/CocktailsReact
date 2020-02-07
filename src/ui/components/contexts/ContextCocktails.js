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

  // const isFav = cocktailObject => {
  //   //console.log(cocktailObject.idDrink);
  //   favorites.forEach(favorite => {
  //     const idfavorite = favorite.idDrink;
  //     //console.log(idfavorite);
  //     if (idfavorite === cocktailObject.idDrink) {
  //       return true;
  //     }
  //     return false;
  //   });

  //   // if (favorites.includes(cocktailObject)) {
  //   //   return true;
  //   // }
  //   // return false;
  // };

  // Favorites
  const [favorites, setFavorites] = useState([]);

  const setAddFavorite = cocktailObject => {
    //console.log(cocktailObject); //objeto
    if (!favorites.includes(cocktailObject)) {
      const newFavs = [...favorites, cocktailObject];
      setFavorites(newFavs);
    }
  };
  const setDeleteFavorite = cocktailObject => {
    if (favorites.includes(cocktailObject)) {
      console.log('si');
      const newFavs = favorites.splice(0, 1);
      setFavorites(newFavs);
    }
  };

  const isFav = recipe => {
    //console.log(recipe); //object
    //console.log(favorites); //array de objetos, vacio en la primera carga
    if (favorites.includes(recipe)) {
      //console.log('si');
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
