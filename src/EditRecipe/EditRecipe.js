import React, { Component } from 'react';
//import config from '../config';
import RecipesContext from '../RecipesContext';

const Required = () => (
  <span className='AddRecipe_required'>*</span>
);

export default class EditRecipe extends Component {
  // static propTypes = {
  //   history: PropTypes.shape({
  //     push: PropTypes.func,
  //   }).isRequired,
  // }

  static contextType = RecipesContext;

  state = {
    error: null,
    foodname: '',
    ingredients: '',
    description: ''
  };

  componentDidMount() {
    //const { id } = this.props.match.parms;

    fetch()
  }















}