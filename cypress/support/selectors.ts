export const getButtonByText = (value: string) =>
  cy.get(`button:contains('${value}')`);
export const getLabelByText = (value: string) =>
  cy.get(`label:contains('${value}')`);
export const getDataQa = (value: string) => cy.get(`[data-qa="${value}"]`);
export const getById = (value: string) => cy.get(`#${value}`);
