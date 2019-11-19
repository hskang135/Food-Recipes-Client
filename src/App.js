import React from 'react';
import config from './config';
import { Route } from 'react-router-dom';
import RecipesContext from './RecipesContext';
import SearchSubmit from './SearchSubmit/SearchSubmit';
import SeeAllRecipes from './SeeAllRecipes/SeeAllRecipes';
import Header from './Header/Header';
import ResultList from './ResultList/ResultList';
import RecipeItem from './RecipeItem/RecipeItem';
import AddRecipe from './AddRecipe/AddRecipe';
export default class App extends React.Component {
  state = {
    recipes: [],
    error: null,
  };

  setRecipes = recipes => {
    this.setState({
      recipes,
      error: null,
    })
  };

  addRecipe = recipe => {
    this.setState({
      recipes: [ ...this.state.recipes, recipe ],
    })
  };

  deleteRecipe = RecipeId => {
    const newRecipe = this.state.recipes.filter(rs =>
      rs.id !== RecipeId
    )
    this.setState({
      recipes: newRecipe
    })
  };

  updateRecipe = updatedRecipe => {
    this.setState({
      recipes: this.state.recipes.map(rs =>
        (rs.id !== updatedRecipe.id) ? rs : updatedRecipe
      )
    })
  };

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_ENDPOINT}`
      }
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then(this.setRecipes)
      .catch(error => {
        this.setState({error})
      })
  };

  render() {
    const value = {
      recipes: this.state.recipes,
      addRecipe: this.addRecipe,
      deleteRecipe: this.deleteRecipe,
      updatedRecipe: this.updatedRecipe
    };
    
    return (
      <main className='App'>
        <header className='App_header'>
          <Header />
        </header>
        <RecipesContext.Provider value={value}>
          <Route 
            path='/'
            component={SearchSubmit}
          />

          <Route 
            path= '/'
            component={SeeAllRecipes}
          />

          <Route 
            path='/'
            component={ResultList}
          />

          <Route 
            path='/'
            component={RecipeItem}
          />

          <Route 
            path='/'
            component={AddRecipe}
          />

        </RecipesContext.Provider>
      </main>
    );
  };

};


