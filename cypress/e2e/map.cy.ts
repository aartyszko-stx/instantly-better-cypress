import { testExamples } from "@cypress/fiddle";

const listExample = `
  <ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
  </ul>
`;

const tests = [
  {
    name: "For each - please don't approach",
    html: listExample,
    test: `
  const beverages = ["Coffee", "Tea", "Milk"];

  beverages.forEach((beverage) => {
    cy.contains("li", beverage)
      .should("be.visible");
    });
    `,
  },
  {
    name: "Cypress each() command",
    html: listExample,
    test: `
  const beverages = ["Coffee", "Tea", "Milk"];

  cy.get("li").each(($listElement, index) => {
    cy.wrap($listElement.text())
      .should("equal", beverages[index]);

    expect($listElement.text()).to.equal(beverages[index]); // it will be executed first
    })
    `,
  },
  {
    name: "Using lodash + map",
    html: listExample,
    test: `
  const beverages = ["Coffee", "Tea", "Milk"];
  const property = "textContent";

  cy.get('li')
    .then($listElement => {
      cy.wrap(Cypress._.map($listElement, property));
    })
    .should("deep.equal", beverages);
  `,
  },
  {
    name: "Using cy.map",
    html: listExample,
    test: `
  const beverages = ["Coffee", "Tea", "Milk"];
  const property = "textContent";

  cy.get('li')
  .map(property)
  .should("deep.equal", beverages);
  `,
  },
];

testExamples(tests);
