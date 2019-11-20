import React, { Component } from 'react';
import RecipesContext from '../RecipesContext';
import RecipeItem from '../RecipeItem/RecipeItem';
//import PropTypes from 'prop-types';
//import config from '../config';

export default class ResultList extends Component {
  static defaultProps = {
    recipes: []
  }

  static contextType = RecipesContext;
  

  render() {
    const { recipes } = this.context;
    console.log(recipes);
    
    return(
      <section className='RecipeList'>
        <ul className='foodname_list'>
          {recipes.map(recipe => 
            <RecipeItem
              key={recipe.id}
              {...recipe}
            />
          )}
        </ul>
      </section>
    )
  }

};


