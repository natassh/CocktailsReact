import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import SelectCategory from 'react-select';
import { ContextListRecipes } from '../../contexts/ContextListRecipes';
import { getCategoriesCocktail } from '../../../../core/services/cocktails';
import ButtonSearch from '../../Atoms/ButtonSearch';
import './FormCocktail.css';

const FormCocktail = ({ className }) => {
  // Get options to select
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    handleCategories();
  }, []);

  const handleCategories = async () => {
    const categoriesCocktails = await getCategoriesCocktail();
    const drinks = categoriesCocktails.drinks;
    setDrinks(drinks);
  };
  const createObjectOptions = drinks => {
    const arrayOptions = [];
    drinks.forEach(bloggerFiltered => {
      const categoryTitle = bloggerFiltered.strCategory;
      arrayOptions.push(categoryTitle);
    });

    const options = arrayOptions.map(category => ({
      value: category,
      label: category
    }));
    return options;
  };

  // Create states for ingredients
  const { ingredientsFiltered, setIngredientsFiltered } = useContext(
    ContextListRecipes
  );
  const [ingredients, setIngredients] = useState({
    category: 'Soft Drink / Soda'
  });

  // Get category selected from select
  const handleChangeCategory = category => {
    const valueCategory = category.value;
    setIngredients({
      category: valueCategory
    });
  };

  // Save filtered ingredients in the App Context
  const handleSubmit = e => {
    e.preventDefault();
    setIngredientsFiltered(ingredients);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <SelectCategory
        onChange={handleChangeCategory}
        options={createObjectOptions(drinks)}
        className="Form__SelectCategory"
        placeholder={ingredientsFiltered.category}
      />
      <ButtonSearch type="submit" value="Search" />
    </form>
  );
};

export default FormCocktail;

FormCocktail.propTypes = {
  className: PropTypes.string
};
