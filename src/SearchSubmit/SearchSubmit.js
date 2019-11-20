import React from 'react';
//import config from '../config';
import './SearchSubmit.css';
//import RecipesContext from '../RecipesContext';

export default class SearchSubmit extends React.Component {
  state={
    results: ''
  }

  handleSearchSubmit = (foodname) => {
    this.setState({
      results: this.setState.results
    })
  }

  render() {
    return(
      //import context into searchsubmit
      
      <main>
        <form className="recipe-search-form" onSubmit={(e) => this.context.handleSearchSubmit(e.target.value)}>
          <label htmlFor="search-bar">Search Recipe: </label>
          <input type="text" name="search-bar" placeholder="Food Name" required></input>
          <button type="submit">Submit</button>
        </form>
      </main>
    )
  }
};


