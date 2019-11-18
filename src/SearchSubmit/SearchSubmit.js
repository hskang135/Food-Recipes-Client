import React from 'react';
import './SearchSubmit.css';

class SearchSubmit extends React.Component {
  state={
    results: ''
  }

  handleSearchSubmit = (foodName) => {
    this.setState({
      results: this.setState.results
    })
  }

  render() {
    return(
      <form class="recipe-search-form">
        <label for="search-bar">Search Recipe: </label>
        <input type="text" name="search-bar" placeholder="Food Name" required></input>
        <button type="submit">Submit</button>
      </form>
    )
  }
};

export default SearchSubmit;

