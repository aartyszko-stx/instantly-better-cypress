declare namespace Cypress {
  interface Chainable {
    getButtonByText: (value: string) => Chainable<JQuery>;
    getLabelByText: (value: string) => Chainable<JQuery>;
    getDataQa: (value: string) => Chainable<JQuery>;
    getById: (value: string) => Chainable<JQuery>;
  }
}

Cypress.Commands.add("getButtonByText", (value: string) => {
  return cy.get(`button:contains('${value}')`);
});

Cypress.Commands.add("getLabelByText", (value: string) => {
  return cy.get(`label:contains('${value}')`);
});

Cypress.Commands.add("getDataQa", (value: string) => {
  return cy.get(`[data-qa="${value}"]`);
});

Cypress.Commands.add("getById", (value: string) => {
  return cy.get(`#${value}`);
});
