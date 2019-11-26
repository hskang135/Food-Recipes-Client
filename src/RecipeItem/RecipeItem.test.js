import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import RecipeItem from './RecipeItem'

describe(`RecipeItem component`, () => {
  const props = {
    id: 'a11114yjfj',
    foodname: 'test-class-name',
    ingredients: 'test-ingredients',
    description: 'test-description'
  }

  it('renders Recipes by default', () => {
    const wrapper = shallow(<RecipeItem />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('renders Recipes given props', () => {
    const wrapper = shallow(<RecipeItem {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})


