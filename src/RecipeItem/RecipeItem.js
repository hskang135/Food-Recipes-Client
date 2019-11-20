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
              <p>{props.ingredients}</p>
              <p>{props.description}</p>
            </div>
          </li>
        )}
      </RecipesContext.Consumer>
  )
};


