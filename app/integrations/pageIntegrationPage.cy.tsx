import React from 'react'
import IntegrationPage from './page'

describe('<IntegrationPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IntegrationPage />)
  })
})