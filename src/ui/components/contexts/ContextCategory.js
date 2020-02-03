import React, { createContext, useState, useEffect } from 'react';

import { getCategoriesCocktail } from '../../../core/services/cocktails';

// Crear el Context
export const ContextCategory = createContext();

// Crear Provider (es donde se encuentran las funciones y el state). Es la referencia la context.
const ProviderCategory = props => {
  // Crear el state del Context
  const [categories, setCategories] = useState([]);

  // Fetch a la api
  useEffect(() => {
    handleCategories();
  }, []);

  const handleCategories = async () => {
    const categoriesCocktails = await getCategoriesCocktail();
    const drinks = categoriesCocktails.drinks;
    setCategories(drinks);
  };
  //console.log(categories);
  //Lo que pongas en el value del 'ContextCategory.Provider' son los valores que estaran disponibles en los demas componentes
  return (
    <ContextCategory.Provider value={{ categories }}>
      {props.children}
    </ContextCategory.Provider>
  );
};

export default ProviderCategory;
