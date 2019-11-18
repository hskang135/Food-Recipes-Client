import React from 'react';
import config from './config';
import { Route } from 'react-router-dom';
import RecipesContext from './RecipesContext';
import SearchSubmit from './SearchSubmit/SearchSubmit';
class App extends React.Component {
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

  addRecipe = Recipe => {
    this.setState({
      recipes: [ ...this.state.recipes, Recipe ],
    })
  };

  deleteRecipe = RecipeId => {
    const newrecipes = this.state.recipes.filter(rs =>
      rs.id !== RecipeId
    )
    this.setState({
      recipes: newrecipes
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
        console.log(error)
        this.setState({error})
      })
  };

  render() {
    const value = {
      recipes: this.state.recipes,
      addRecipe: this.addRecipe,
      deleteRecipe: this.deleteRecipe,
      updatedRecipe: this.updateRecipe
    };
    
    return (
      <main className='App'>
        <h1>Food Recipes</h1>
        <RecipesContext.Provider value={value}>
          <Route 
            path= '/'
            component={SearchSubmit}
          />

        </RecipesContext.Provider>
      </main>
    );
  };

};


export default App;
