const getRecipesCocktail = category => {
  const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const recipesCocktailResponseObject = fetch(endPoint);
  const recipesCocktailJsonPromise = recipesCocktailResponseObject.then(res =>
    res.json()
  );
  const recipesCocktail = recipesCocktailJsonPromise.then(data => data);
  return recipesCocktail;
};

export { getRecipesCocktail };
