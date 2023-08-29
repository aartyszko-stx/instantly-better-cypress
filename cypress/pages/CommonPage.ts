export class CommonPage {
  clickButton(buttonName: string) {
    cy.get(`button:contains('${buttonName}')`).click();
  }

  assertText(text: string) {
    cy.contains(text).should("be.visible");
  }
}
