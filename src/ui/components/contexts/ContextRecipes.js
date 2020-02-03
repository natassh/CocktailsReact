import React, { createContext, useState, useEffect } from 'react';

import { getRecipesCocktail } from '../../../core/services/cocktails';

// Crear el Context
export const ContextRecipes = createContext();

const ProviderRecipes = props => {
  const [recipes, setRecipes] = useState([]);
  const [cocktailsToSearch, setcocktailsToSearch] = useState({
    ingredient: 'coco',
    category: 'beer'
  });

  // Fetch a la api
  useEffect(() => {
    handleRecipes(cocktailsToSearch);
  }, [cocktailsToSearch]);

  const handleRecipes = async cocktailsToSearch => {
    const { ingredient, category } = cocktailsToSearch;

    const recipesCocktails = await getRecipesCocktail(ingredient, category);
    const recipes = recipesCocktails.drinks;
    setRecipes(recipes);
  };
  return (
    <ContextRecipes.Provider
      value={{ cocktailsToSearch, setcocktailsToSearch, recipes, setRecipes }}
    >
      {props.children}
    </ContextRecipes.Provider>
  );
};

export default ProviderRecipes;
