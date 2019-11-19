import React from 'react';

export default function AddRecipe(props) {

  return(
    <form className="create-recipe">
        <h2>Create New Recipe</h2>
        <div className="form-section">
          <label htmlFor="recipes-title">Name of Recipe Title: </label>
          <input type="text" name="recipes-title" placeholder="Add food recipe name" required />
        </div>

        <div className="form-section">
          <label htmlFor="ingredients-summary">Ingredients: </label>
          <textarea name="ingredients-summary" rows="5" required></textarea>
        </div>
          
        <div className="form-section">
          <label htmlFor="recipes-summary">Recipe Summary: </label>
          <textarea name="recipes-summary" rows="5" required></textarea>
        </div>
          
        <button type="submit">Submit New Recipe</button>
      </form>
  )

}
