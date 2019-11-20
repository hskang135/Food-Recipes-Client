import React from 'react';//import config from '../config';
import './SearchSubmit.css';
//import RecipesContext from '../RecipesContext';

export default class SearchSubmit extends React.Component {
  constructor(props) {
    super(props); 
    this.state ={
      recipes: [],
      searchName: {
        value: '',
        touched: false,
      }
    }
  };

  handleSubmit = (event) => {
      event.preventDefault();
      const {searchName} = this.state;
      this.props.handleSearchSubmit(searchName.value);
      
      event.target.searchName.value='';
      this.setState({
          touched: false,
      }) 
  };

  updateNameSearch = (id) => {
      this.setState({ 
          searchName: 
          {value: id, 
          touched: true}
      })
  };

  validateName() { 
      const id = this.state.searchName.value.trim(); 
      if (id.length === 0) { 
        return 'Food name is required'
      }
  };

  render() {
    return(
      <main>
        <form className="recipe-search-form" 
          onSubmit={(e) => this.context.handleSearchSubmit(e.target.value)}>
          <label htmlFor="search-bar">Search Recipe: </label>
          <input id='SearchName' type="text" placeholder="Food Name" 
            onChange={(e) => this.updateNameSearch(e.target.value)}required />
            {this.state.searchName.touched}
          <button type="submit" disabled={this.validateName()}>Submit</button>
        </form>
      </main>
    )
  }
};


