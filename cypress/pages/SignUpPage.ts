import { User } from "../fixtures/generateUser";
import { CommonPage } from "./CommonPage";

export class SignUpPage extends CommonPage {
  fillNewUserSignUpForm(user: User) {
    const { firstName, email } = user;
    cy.get('[data-qa="signup-name"]').type(firstName);
    cy.get('[data-qa="signup-email"]').type(email);
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
    cy.get("label").contains(title).click();
    cy.get('[data-qa="name"]').should("have.value", firstName);
    cy.get('[data-qa="email"]').should("have.value", email);
    cy.get('[data-qa="password"]').type(password);
    cy.get('[data-qa="days"]').select(dateOfBirth.day);
    cy.get('[data-qa="months"]').select(dateOfBirth.month);
    cy.get('[data-qa="years"]').select(dateOfBirth.year);
    isNewsletterSubscribed && cy.get("#newsletter").check();
    isSpecialOffersSubscribed && cy.get("#optin").check();
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
    cy.get('[data-qa="first_name"]').type(firstName);
    cy.get('[data-qa="last_name"]').type(lastName);
    cy.get('[data-qa="company"]').type(company);
    cy.get('[data-qa="address"]').type(address);
    cy.get('[data-qa="address2"]').type(address2);
    cy.get('[data-qa="country"]').select(country);
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipCode);
    cy.get('[data-qa="mobile_number"]').type(mobileNumber);
  }
}
