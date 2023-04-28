import React from 'react'
import NewChat from '../NewChat'

describe('<NewChat />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewChat />)
  })
})