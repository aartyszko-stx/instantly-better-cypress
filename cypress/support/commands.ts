Cypress.Commands.add(
  "getPropertyArray",
  { prevSubject: "element" },
  (subject, property) => {
    return cy.wrap(subject).then(($els: JQuery) => {
      cy.wrap(Cypress._.map($els, property));
    });
  },
);
