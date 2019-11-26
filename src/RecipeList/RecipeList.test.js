import React from 'react';
import toJson from 'enzyme-to-json';
import RecipeList from './RecipeList';
import renderer from 'react-test-renderer';
import RecipesContext from '../RecipesContext';

const context = {
  recipes: [
    {
      "id": "cbc787a-ffaf-11e8-8sp2",
      "foodname": "Test food name",
      "ingrdients": "Test ingredients",
      "description": "Test description"
    },
    {
      "id": "cbc787a-ffaf-11e8-8ef4",
      "foodname": "Test food name",
      "ingrdients": "Test ingredients",
      "description": "Test description"
    },
    {
      "id": "cbc787a-ffaf-11e8-8y7i",
      "foodname": "Test food name",
      "ingrdients": "Test ingredients",
      "description": "Test description"
    },
  ]
}

describe(`RecipeList component`, () => {
  it('renders UI expeacted', () => {
    const tree = renderer
      .create(<RecipesContext.Provider value={context}> 
                <RecipeList /> 
              </RecipesContext.Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })

  // enzyme doesn't yet support React.createContext
  it.skip('renders Recipes in ul for each in array', () => {
    const props = {
      match: {
        params: {
          id: 'THIS_RECIPE_ID'
        }
      }
    }

    const ul = (<RecipeList {...props} />, context)
      .find('ul')
    expect(toJson(ul)).toMatchSnapshot()
  })
})



