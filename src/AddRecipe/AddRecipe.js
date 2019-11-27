import React, {Component} from 'react';
import RecipesContext from '../RecipesContext';
import config from '../config';
import './AddRecipe.css';

const Required = () => (
  <span className='AddRecipe_required'> * </span>
);
export default class AddRecipe extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    }
  };

  static contextType = RecipesContext;

  handleSubmit = e => {
    e.preventDefault();

    const { foodname, ingredients, description } = e.target; 
    const newRecipe = {
      foodname: foodname.value,
      ingredients: ingredients.value,
      description: description.value
    };

    fetch(`${config.API_ENDPOINT}/recipes`, {
      method: 'POST',
      body: JSON.stringify(newRecipe),
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(res => {
      if(!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(data => {
      foodname.value = ''
      ingredients.value = ''
      description.value = ''
      this.context.addRecipe(data)
      this.props.history.push('/')
    })
    .catch(error => {
      this.setState({error})
    })

  };

  render() {
    return(
      <section className='AddRecipe'>
        <h3> Create New Recipe </h3>
        
        <form
          className='AddRecipe_form'
          onSubmit={this.handleSubmit}
        >
          <div>
            <label htmlFor="Name"> Food Recipe Name: {' '} <Required /></label> <br />
            <input type="text" id="foodname" name="recipeName" placeholder="Food Recipe Name" required />
          </div>

          <div>
            <label htmlFor="Ingredients"> Ingredients <br />
              (Please write seperate by comma): {' '} <Required /></label> <br />
            <textarea id="ingredients" name="ingredients" rows="6" cols="45" required></textarea>
          </div>

          <div>
            <label htmlFor="Description"> Description: {' '} <Required /></label> <br />
            <textarea id="description" name="description" rows="6" cols="45" required></textarea>
          </div>
          
          <div>
            <button type="submit"> Submit New Recipe </button>
          </div>
        </form>
      </section>
    )
  }
  
};




