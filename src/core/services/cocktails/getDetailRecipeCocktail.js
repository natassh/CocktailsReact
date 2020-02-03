const getDetailRecipeCocktail = idCocktail => {
  const endPoint = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idCocktail}`;
  const detailRecipeCocktailResponseObject = fetch(endPoint);
  const detailRecipeCocktailJsonPromise = detailRecipeCocktailResponseObject.then(
    res => res.json()
  );
  const detailRecipeCocktail = detailRecipeCocktailJsonPromise.then(
    data => data
  );
  return detailRecipeCocktail;
};

export { getDetailRecipeCocktail };
