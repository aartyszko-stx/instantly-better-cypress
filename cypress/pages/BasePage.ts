import { getButtonByText } from "../support/selectors";

export class BasePage {
  clickButton(buttonText: string) {
    getButtonByText(buttonText).click();
  }

  assertText(text: string) {
    cy.contains(text).should("be.visible");
  }
}
