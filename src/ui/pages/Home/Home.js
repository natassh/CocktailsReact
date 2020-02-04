import React, { useContext } from 'react';
import { ContextListRecipes } from '../../components/contexts/ContextListRecipes';
import FormCocktail from '../../components/Molecules/FormCocktail';
import RecipeList from '../../components/Molecules/RecipeList';
import './Home.css';

const Home = () => {
  const { recipes } = useContext(ContextListRecipes);
  return (
    <>
      <main>
        <div className="cw">
          <FormCocktail className="FormCocktail" />
          {recipes.length > 0 && <RecipeList recipes={recipes} />}
        </div>
      </main>
    </>
  );
};

export default Home;
