import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import SelectCategory from 'react-select';

import InputIngredient from '../../Atoms/InputIngredient';
import ButtonSearch from '../../Atoms/ButtonSearch';

import { ContextCategory } from '../../contexts/ContextCategory';
import { ContextRecipes } from '../../contexts/ContextRecipes';

import './FormCocktail.css';

const FormCocktail = ({ className, cocktailObtained }) => {
  // Print options select
  const { categories } = useContext(ContextCategory);
  const createObjectOptions = categories => {
    const arrayOptions = [];
    categories.forEach(bloggerFiltered => {
      const categoryTitle = bloggerFiltered.strCategory;
      arrayOptions.push(categoryTitle);
    });

    const options = arrayOptions.map(category => ({
      value: category,
      label: category
    }));
    return options;
  };

  const { setcocktailsToSearch } = useContext(ContextRecipes);

  const [cocktail, setCocktail] = useState({
    ingredient: 'coco',
    category: 'beer'
  });

  const handleChangeIngredient = ingredientValue => {
    setCocktail({
      ...cocktail,
      ingredient: ingredientValue
    });
  };
  const handleChangeCategory = category => {
    const valueCategory = category.value;
    setCocktail({
      ...cocktail,
      category: valueCategory
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    cocktailObtained(cocktail);
    setcocktailsToSearch(cocktail);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <InputIngredient onChange={handleChangeIngredient} />
      <SelectCategory
        onChange={handleChangeCategory}
        options={createObjectOptions(categories)}
        className="Form__SelectCategory"
      />
      <ButtonSearch type="submit" value="Search" />
    </form>
  );
};

export default FormCocktail;

FormCocktail.propTypes = {
  className: PropTypes.string,
  cocktailObtained: PropTypes.func
};
