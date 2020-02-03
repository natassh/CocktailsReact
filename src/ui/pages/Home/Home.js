import React, { useContext } from 'react';
import FormCocktail from '../../components/Molecules/FormCocktail';
import RecipeList from '../../components/Molecules/RecipeList';

import { ContextRecipes } from '../../components/contexts/ContextRecipes';
import { getRecipesCocktail } from '../../../core/services/cocktails';

import './Home.css';

const Home = () => {
  const { recipes, setRecipes } = useContext(ContextRecipes);

  const handleCocktailObtained = async cocktailObtainedForm => {
    const { ingredient, category } = cocktailObtainedForm;
    const recipesFormData = await getRecipesCocktail(ingredient, category);
    setRecipes(recipesFormData);
  };
  return (
    <>
      <main>
        <div className="cw">
          <FormCocktail
            className="FormCocktail"
            cocktailObtained={handleCocktailObtained}
          />
          {recipes.length > 0 && <RecipeList recipes={recipes} />}
        </div>
      </main>
    </>
  );
};

export default Home;
