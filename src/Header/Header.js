import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {

  render() {
    return(
      <div className="Header">
        <Link to='/'>
          <h1 className="homepage-button">Home</h1>
        </Link>
        
        <Link to='/myrecipes'>
          <h1 className="my-recipes-button">My Recipes</h1>
        </Link>
      </div>  
    )
  }
};





