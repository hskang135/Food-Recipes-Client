import React from 'react';
import config from './config';
import { Route } from 'react-router-dom';
import RecipesContext from './RecipesContext';
import SearchSubmit from './SearchSubmit/SearchSubmit';
import SeeAllfoodrecipes from './SeeAllRecipes/SeeAllRecipes';
import Header from './Header/Header';
import ResultList from './ResultList/ResultList';
import RecipeItem from './RecipeItem/RecipeItem';
import AddRecipe from './AddRecipe/AddRecipe';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      filterName: '',
      recipes: [],
      searchName: {
        results: null,
        error: null,
        search: false,
        loading: false,
      }
    }
  };

  setRecipes = foodrecipes => {
    this.setState({
      foodrecipes,
      error: null,
    })
  };

  addRecipe = recipe => {
    this.setState({
      foodrecipes: [ ...this.state.foodrecipes, recipe ],
    })
  };

  deleteRecipe = recipeId => {
    const newRecipe = this.state.foodrecipes.filter(rs =>
      rs.id !== recipeId
    )
    this.setState({
      foodrecipes: newRecipe
    })
  };

  updateRecipe = updatedRecipe => {
    this.setState({
      foodrecipes: this.state.foodrecipes.map(rs =>
        (rs.id !== updatedRecipe.id) ? rs : updatedRecipe
      )
    })
  };

  editRecipe = (recipeId, recipeData) => {
    this.setState({
      foodrecipes: this.state.foodrecipes.map(r =>
        r.id === Number(recipeId) ? {...r, ...recipeData} : r
      )
    })
  };

  handleSearchSubmit = (foodname) => {
    this.setState({
      filter: foodname
    })
    //add another state property to filter recipes
    //
  };

  componentDidMount() {
    console.log(config.API_ENDPOINT)
    fetch(`${config.API_ENDPOINT}/foodrecipes`, {
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
    const recipes = this.state.recipes.filter(recipe => recipe.includes(this.state.filter));
    const contextValue = {
      foodrecipes: this.state.foodrecipes,
      addRecipe: this.addRecipe,
      deleteRecipe: this.deleteRecipe,
      updatedRecipe: this.updatedRecipe,
      editRecipe: this.editRecipe,
      handleSearchSubmit: this.handleSearchSubmit,
      recipes
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

          <Route
            exact 
            path= '/'
            component={SeeAllfoodrecipes}
          />

          <Route 
            exact
            path='/'
            component={ResultList}
          />

          <Route 
            exact
            path='/'
            component={RecipeItem}
          />

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


