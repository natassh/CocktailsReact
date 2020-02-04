import React, { createContext, useState, useEffect } from 'react';

import { getRecipesCocktail } from '../../../core/services/cocktails';

// Crear el Context
export const ContextListRecipes = createContext();

const ProviderListRecipes = props => {
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

  return (
    <ContextListRecipes.Provider
      value={{ ingredientsFiltered, setIngredientsFiltered, recipes }}
    >
      {props.children}
    </ContextListRecipes.Provider>
  );
};

export default ProviderListRecipes;
