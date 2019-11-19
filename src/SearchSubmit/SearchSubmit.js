import React from 'react';
//import config from '../config';
import './SearchSubmit.css';

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
      <main>
        <form className="recipe-search-form">
          <label htmlFor="search-bar">Search Recipe: </label>
          <input type="text" name="search-bar" placeholder="Food Name" required></input>
          <button type="submit">Submit</button>
        </form>
      </main>
    )
  }
};


