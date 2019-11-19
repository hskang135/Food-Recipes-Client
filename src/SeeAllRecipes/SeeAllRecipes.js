import React, { Component } from 'react';
import './SeeAllRecipes.css';

export default class SeeAllRecipes extends Component {
  state = {
    error: null,
  };



  render() {
    return (
      <main>
        <div className="search-result-container">
          <h2>Food Name</h2>
        </div>

        <div className="search-result-container">
          <h2>Food Name</h2>
        </div>

        <div className="search-result-container">
          <h2>Food Name</h2>
        </div>

        <div className="search-result-container">
          <h2>Food Name</h2>
        </div>

        <div className="search-result-container">
          <h2>Food Name</h2>
        </div>
      </main>
    )
  }

};

