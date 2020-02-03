const getCategoriesCocktail = () => {
  const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;
  const categoriesCocktailResponseObject = fetch(endPoint);
  const categoriesCocktailJsonPromise = categoriesCocktailResponseObject.then(
    res => res.json()
  );
  const categoriesCocktail = categoriesCocktailJsonPromise.then(data => data);
  return categoriesCocktail;
};

export { getCategoriesCocktail };
