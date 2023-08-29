import { User } from "../fixtures/generateUser";
import { getById, getDataQa, getLabelByText } from "../support/selectors";
import { BasePage } from "./BasePage";

export class SignUpPage extends BasePage {
  fillNewUserSignUpForm(user: User) {
    const { firstName, email } = user;
    getDataQa("signup-name").type(firstName);
    getDataQa("signup-email").type(email);
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
    getLabelByText(title).click();
    getDataQa("name").should("have.value", firstName);
    getDataQa("email").should("have.value", email);
    getDataQa("password").type(password);
    getDataQa("days").select(dateOfBirth.day);
    getDataQa("months").select(dateOfBirth.month);
    getDataQa("years").select(dateOfBirth.year);
    isNewsletterSubscribed && getById("newsletter").check();
    isSpecialOffersSubscribed && getById("optin").check();
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
    getDataQa("first_name").type(firstName);
    getDataQa("last_name").type(lastName);
    getDataQa("company").type(company);
    getDataQa("address").type(address);
    getDataQa("address2").type(address2);
    getDataQa("country").select(country);
    getDataQa("state").type(state);
    getDataQa("zipcode").type(city);
    getDataQa("city").type(zipCode);
    getDataQa("mobile_number").type(mobileNumber);
  }
}
