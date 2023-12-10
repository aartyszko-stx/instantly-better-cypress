import { generateUser } from "utils/generateUser";
import { SignUpPage } from "pages/SignUpPage";

describe("user registration with randomized test data using faker.js", () => {
  const SignUp = new SignUpPage();

  before(() => {
    cy.visit("https://www.automationexercise.com/login");
  });

  it("successful registration using data generated data by faker.js", () => {
    // ARRANGE
    const userData = generateUser();

    // ACT
    SignUp.fillNewUserSignUpForm(userData);
    SignUp.clickButton("Signup");
    SignUp.fillAccountInformation(userData);
    SignUp.fillAddressInformation(userData);
    SignUp.clickButton("Create Account");

    // ASSERT
    SignUp.assertText("Account Created!");
  });
});
