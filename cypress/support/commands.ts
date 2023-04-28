/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>
    }
  }
}

Cypress.Commands.add("login", () => {
	cy.intercept("/api/auth/session", {"email": "test@example.com", "password": "password"}).as("session");

	// Set the cookie for cypress.
	// It has to be a valid cookie so next-auth can decrypt it and confirm its validity.
	// This step can probably/hopefully be improved.
	// We are currently unsure about this part.
	// We need to refresh this cookie once in a while.
	// We are unsure if this is true and if true, when it needs to be refreshed.
	cy.setCookie("next-auth.session-token", "a valid cookie from your browser session");
	// Cypress.Cookies.preserveOnce("next-auth.session-token");
});

export {};