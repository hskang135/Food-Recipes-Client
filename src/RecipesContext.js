import React from 'react';

const RecipesContext = React.createContext({
  recipes: [],
  addRecipe: () => {},
  deleteRecipe: () => {},
  updateRecipe: () => {}
});

export default RecipesContext;


