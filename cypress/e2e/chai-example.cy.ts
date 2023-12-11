import { testExamples } from "@cypress/fiddle";

const listExample = `
  <ul>
    <li> 11 </li>
    <li> 2 </li>
    <li> 3 </li>
    <li class="last"> 4 </li>
  </ul>
`;

const shouldExample = `
  <a href="/users" highlighted>Users</a> 
`;

const tests = [
  {
    name: "Inconvenience with should()",
    html: shouldExample,
    test: `
    cy.pause();
    cy.get('a')
      .should('have.attr', 'href', '/users')
      .and("have.attr", "highlighted")
      .and("have.text", "Users");
    cy.pause();
    `,
  },
  {
    name: "Should with callback",
    html: shouldExample,
    test: `
  cy.pause()
  const property = "textContent";
  cy.get('a')
  .should(($hyperlink) => {
    expect($hyperlink).to.have.attr('href', '/users');
    expect($hyperlink).to.have.attr('highlighted');
    expect($hyperlink).to.have.text("Users");
  })
    `,
  },
  {
    name: "Using chai plugins",
    html: listExample,
    test: `
  cy.pause()
  const property = "textContent";
  cy.get('li')
    .then($listElement => {
      cy.wrap(Cypress._.map($listElement, property));
    })
    .should("be.sorted");
    `,
  },
  {
    name: "Using custom chai assertion",
    html: listExample,
    test: `
  cy.pause()
  const property = "textContent";
  cy.get('li.last')
    .should("have.textTrimmed", "4");
  cy.pause()
  cy.get('li.last')
    .should("have.text", "4");
    `,
  },
];

testExamples(tests); // some changes
