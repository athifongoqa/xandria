import React from 'react'
import SourcePage from './page'

describe('<SourcePage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<SourcePage />)
  })
})