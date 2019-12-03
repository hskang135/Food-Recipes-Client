import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends Component {

  render() {
    return (
      <div className="header">

        <h1 className="homepage">
          <Link to='/'>
            Home
          </Link>
        </h1>

        <h1 className="myrecipes">
          <Link to='/myrecipes'> 
            Create New Recipe 
          </Link>   
        </h1>
      </div>  
    )
  }
};


