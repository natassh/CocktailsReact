import React, { createContext, useState, useEffect } from 'react';
import { getDetailRecipeCocktail } from '../../../core/services/cocktails';

export const ContextDetailRecipe = createContext();

const ProviderDetailRecipes = props => {
  const [idCocktail, setIdCocktail] = useState(null);
  const [recipeCocktail, setRecipeCocktail] = useState([]);

  useEffect(() => {
    if (!idCocktail) return;
    handleDetailRecipeCocktail(idCocktail);
  }, [idCocktail]);

  const handleDetailRecipeCocktail = async idCocktail => {
    const detailRecipeCocktail = await getDetailRecipeCocktail(idCocktail);
    const recipe = detailRecipeCocktail.drinks;
    setRecipeCocktail(recipe);
  };
  return (
    <ContextDetailRecipe.Provider
      value={{ setIdCocktail, recipeCocktail, setRecipeCocktail }}
    >
      {props.children}
    </ContextDetailRecipe.Provider>
  );
};

export default ProviderDetailRecipes;
