export class BasePage {
  clickButton(buttonText: string) {
    cy.getButtonByText(buttonText).click();
  }

  assertText(text: string) {
    cy.contains(text).should("be.visible");
  }
}
