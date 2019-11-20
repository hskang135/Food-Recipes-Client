import React, {Component} from 'react';

export default class AddRecipe extends Component {


  render() {
    return(
      <form className="create-recipe">
          <h2>Create New Recipe</h2>
          <div className="form-section">
            <label htmlFor="recipes-title">Name of Recipe Title: </label>
            <input type="text" name="recipes-title" placeholder="Food Recipe Name" required />
          </div>
  
          <div className="form-section">
            <label htmlFor="ingredients-summary">Ingredients <br />
              (Please write seperate by comma): </label> <br />
            <textarea name="ingredients-summary" rows="6" required></textarea>
          </div>
            
          <div className="form-section">
            <label htmlFor="recipes-summary">Recipe Summary: </label> <br />
            <textarea name="recipes-summary" rows="6" required></textarea>
          </div>
            
          <button type="submit">Submit New Recipe</button>
        </form>
    )
  }
  

}
