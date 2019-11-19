import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {


  render() {
    return(
      <div className="Header">
        <h1 className="homepage-button" tag={Link}>Home</h1>
        <h1 className="my-recipes-button" tag={Link}>My Recipes</h1>
      </div>  
    )
  }
};


