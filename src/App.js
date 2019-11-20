import React from 'react';
import config from './config';
import { Route } from 'react-router-dom';
import RecipesContext from './RecipesContext';
import SearchSubmit from './SearchSubmit/SearchSubmit';
import Header from './Header/Header';
import RecipeList from './RecipeList/RecipeList';
import AddRecipe from './AddRecipe/AddRecipe';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      recipes: [],
      searchName: {
        results: null,
        error: null,
        search: false,
        loading: false,
      }
    }
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

  deleteRecipe = recipeId => {
    const newRecipe = this.state.recipes.filter(rs =>
      rs.id !== recipeId
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

  editRecipe = (recipeId, recipeData) => {
    this.setState({
      recipes: this.state.recipes.map(r =>
        r.id === Number(recipeId) ? {...r, ...recipeData} : r
      )
    })
  };

  handleSearchSubmit = (id) => {
    this.setState({
      recipes: this.state.recipes.filter(rec => rec.id === id)
    })
  };

  componentDidMount() {
    console.log(`${config.API_ENDPOINT}/recipes`);

    fetch(`${config.API_ENDPOINT}/recipes`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if(!res.ok) {
          return res.json().then(error => Promise.reject(error))
        }
        return res.json()
      })
      .then((foods) => {
        this.setRecipes(foods)
      })
      .catch(error => {
        this.setState({error})
      })
  };

  render() {
    const contextValue = {
      recipes: this.state.recipes,
      addRecipe: this.addRecipe,
      deleteRecipe: this.deleteRecipe,
      updatedRecipe: this.updatedRecipe,
      editRecipe: this.editRecipe,
      handleSearchSubmit: this.handleSearchSubmit
    };
    
    return (
      <main className='App'>
        <header className='App_header'>
          <Header />
        </header>
        <RecipesContext.Provider value={contextValue}>
          <Route
            exact 
            path='/'
            component={SearchSubmit}
          />

          {['/', '/:id'].map(path =>
            <Route 
            exact
            key={path}
            path={path}
            component={RecipeList}
            />
          )}

          <Route 
            exact
            path='/'
            component={AddRecipe}
          />

        </RecipesContext.Provider>
      </main>
    );
  };

};


