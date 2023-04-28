import React from 'react'
import ChatInput from '../ChatInput'

describe('<ChatInput />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ChatInput />)
  })
})