const clickButton = (buttonName: string) => {
  cy.get(`button:contains('${buttonName}')`).click();
};

const assertText = (text: string) => {
  cy.contains(text).should("be.visible");
}

export const common = {
  clickButton,
  assertText
};
