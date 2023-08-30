import { User } from "../fixtures/generateUser";
import { BasePage } from "./BasePage";

export class SignUpPage extends BasePage {
  fillNewUserSignUpForm(user: User) {
    const { firstName, email } = user;
    cy.getDataQa("signup-name").type(firstName);
    cy.getDataQa("signup-email").type(email);
  }

  fillAccountInformation(user: User) {
    const {
      title,
      firstName,
      email,
      password,
      dateOfBirth,
      isNewsletterSubscribed,
      isSpecialOffersSubscribed,
    } = user;
    cy.getLabelByText(title).click();
    cy.getDataQa("name").should("have.value", firstName);
    cy.getDataQa("email").should("have.value", email);
    cy.getDataQa("password").type(password);
    cy.getDataQa("days").select(dateOfBirth.day);
    cy.getDataQa("months").select(dateOfBirth.month);
    cy.getDataQa("years").select(dateOfBirth.year);
    isNewsletterSubscribed && cy.getById("newsletter").check();
    isSpecialOffersSubscribed && cy.getById("optin").check();
  }

  fillAddressInformation(user: User) {
    const {
      firstName,
      lastName,
      company,
      address,
      address2,
      country,
      state,
      city,
      zipCode,
      mobileNumber,
    } = user;
    cy.getDataQa("first_name").type(firstName);
    cy.getDataQa("last_name").type(lastName);
    cy.getDataQa("company").type(company);
    cy.getDataQa("address").type(address);
    cy.getDataQa("address2").type(address2);
    cy.getDataQa("country").select(country);
    cy.getDataQa("state").type(state);
    cy.getDataQa("zipcode").type(city);
    cy.getDataQa("city").type(zipCode);
    cy.getDataQa("mobile_number").type(mobileNumber);
  }
}
