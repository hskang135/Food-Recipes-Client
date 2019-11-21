import React from 'react';
import RecipesContext from '../RecipesContext';
import config from '../config';

function deleteRecipeRequest(id, cb) {
  fetch(config.API_ENDPOINT + `/recipes/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if(!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
    })
    .then(() => {
      cb(id)
    })
    .catch(error => {
      console.error(error)
    })
};

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

            <div className='recipesButton'>
              <button className='delete'
                onClick={() => {
                  deleteRecipeRequest(
                    props.id,
                    context.deleteRecipe
                  )
                }}> 
                Delete Recipe
              </button>
            </div>
          </li>
        )}
      </RecipesContext.Consumer>
  )


};





