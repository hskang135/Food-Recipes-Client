import React from 'react';

const RecipesContext = React.createContext({
  recipes: [],
  addRecipe: () => {},
  deleteRecipe: () => {},
  updateRecipe: () => {},
  editRecipe: () => {}
});

export default RecipesContext;


