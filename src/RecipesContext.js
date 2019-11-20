import React from 'react';

const RecipesContext = React.createContext({
  foodname: [],
  recipes: [],
  addRecipe: () => {},
  deleteRecipe: () => {},
  updateRecipe: () => {},
  editRecipe: () => {}
});

export default RecipesContext;


