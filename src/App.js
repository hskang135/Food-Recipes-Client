import React from 'react';
import config from './config';
import { Route } from 'react-router-dom';
import RecipesContext from './RecipesContext';
import Header from './Header/Header';
import RecipeList from './RecipeList/RecipeList';
import AddRecipe from './AddRecipe/AddRecipe';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      recipes: [],
      search: ''
    }
  };

  setRecipes = recipes => {
    this.setState({
      recipes,
    })
  };

  addRecipe = recipe => {
    this.setState({
      recipes: [ ...this.state.recipes, recipe ],
    })
  };

  deleteRecipe = id => {
    const newRecipe = this.state.recipes.filter(rs => rs.id !== id
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
      .then((recipes) => {
        this.setRecipes(recipes)
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
          
          {['/', '/recipes/:id'].map(path =>
            <Route 
            exact
            key={path}
            path={path}
            component={RecipeList}
            />
          )}

          <Route 
            exact
            path='/myrecipes'
            component={AddRecipe}
          />

        </RecipesContext.Provider>
      </main>
    );
  };

};





