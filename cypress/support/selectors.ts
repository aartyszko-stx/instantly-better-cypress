export const getButtonByText = (value: string) => {
  return cy.get(`button:contains('${value}')`);
};
export const getLabelByText = (value: string) => {
  return cy.get(`label:contains('${value}')`);
};

export const getDataQa = (value: string) => {
  return cy.get(`[data-qa="${value}"]`);
};

export const getById = (value: string) => {
  return cy.get(`#${value}`);
};
