import React, { Component } from 'react';

export default class CreatedRecipe extends Component {
  
  render() {
    return (
      <div className="single-recipe">
        <h2>Food Name</h2>
        <h3>Ingredients: </h3>

        <ul>
          <li>Ingredient types</li>
          <li>Ingredient types</li>
          <li>Ingredient types</li>
          <li>Ingredient types</li>
        </ul>
        
        <p>Explain how to cook. <br />
          Total time to cook: min</p>

        <button type="button">Edit Recipe</button>
        <button type="button">Delete Recipe</button>
      </div>
    )
  }


};


