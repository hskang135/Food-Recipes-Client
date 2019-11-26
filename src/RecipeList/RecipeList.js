import React, { Component } from 'react';
import RecipesContext from '../RecipesContext';
import RecipeItem from '../RecipeItem/RecipeItem';

export default class RecipeList extends Component {
  static defaultProps = {
    recipes: []
  }

  static contextType = RecipesContext;
  
  render() {
    const { recipes } = this.context;

    return(
      <section className='RecipeList'>
        <ul className='food_list'>
          {recipes.map(recipe => 
            <RecipeItem
              key={recipe.id}
              id = {recipe.id}
              {...recipe}
            />
          )}
        </ul>
      </section>
    )
  }

};





