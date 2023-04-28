describe("Cypress login", () => {
	it("should provide a valid session", () => {
		cy.login();
		cy.visit("/");
		cy.wait("@session");
		cy.get("[data-test-id='authenticated']").should("exist").then(() => {
			cy.log("Cypress login successful");
		});
	});
});

export {}