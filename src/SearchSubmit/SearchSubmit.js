import React from 'react';
import './SearchSubmit.css';

export default class SearchSubmit extends React.Component {
  constructor() {
    super(); 
    this.state={
      search: ''
    }
  };

  updateSearch = (e) => {
    console.log(e)
    this.setState({
      search: e   
    })
  };

  render() {
    
    return(
      
      <main>
        <div className="recipe-search-form" 
          onSubmit={(e) => this.context.handleSearchSubmit(e.target.value)}>
          <label htmlFor="search-bar">Search Recipe: </label>
          <input id='SearchName' type="text" placeholder="Food Name" 
            onChange={(e) => this.updateSearch(e.target.value)}required />
          <button type="submit">Submit</button> 
        </div>

        <div>
          <ul>

          </ul>
        </div>
      </main>
    
    )
  }
};

