import React from 'react'
import ChatRow from '../ChatRow'

describe('<ChatRow />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ChatRow />)
  })
})