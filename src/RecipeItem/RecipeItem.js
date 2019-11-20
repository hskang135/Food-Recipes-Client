import React from 'react';
import RecipesContext from '../RecipesContext';
//import config from '../config';

export default function RecipeItem(props) {

  return (
      <RecipesContext.Consumer>
        { (context) => (
          <li className ='RecipeItem'>
            <div className = 'RecipeItem_row'>
              <h2>{props.foodname}</h2>
              
              <ul>
                <li>Ingredients: {props.ingredients}</li>
                <li>Description: {props.description}</li>
              </ul>
            </div>
          </li>
        )}
      </RecipesContext.Consumer>
  )
};


