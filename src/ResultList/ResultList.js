import React, { Component } from 'react';
//import PropTypes from 'prop-types';
//import config from '../config';

export default class ResultList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchName: {
        value: '',
        touched: false
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const {searchName} = this.state;
    this.props.handleSearchSubmit(searchName.value);

    event.target.searchName.value = '';
    this.setState({
      touched: false
    })
  };
  updateNameSearch = (name) => {
    this.setState({ 
        searchName: 
        {value: name, 
        touched: true}
    })
  };

  validateName() { 
    const name = this.state.searchName.value.trim(); 
    if (name.length === 0) { 
      return 'Name is required'
    }
  };

  render() {
    return(
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

      </main>
    )
  }

};


