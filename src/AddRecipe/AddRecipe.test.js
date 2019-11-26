import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddRecipe from './AddRecipe'

describe(`AddReceipe component`, () => {
  const stubAddRecipe = [
    {
      "id": "b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1",
      "foodname": "Apple water",
      "ingredients": "Test ingredients",
      "description": "Add all ingredients"
    },
    {
      "id": "b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1",
      "foodname": "Coffee bread",
      "ingredients": "Test ingredients",
      "description": "Combine all ingredients and put in the oven"
    }
  ]

  it('renders the complete form', () => {
    const context = { rescipes: stubAddRecipe }
    const wrapper = shallow(<AddRecipe />, context)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  
})


