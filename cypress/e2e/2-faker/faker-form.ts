import { User, userData } from "../../fixtures/generateUser";
import { common } from "../../support/commonCommands";
import { register } from "../../support/registerCommands";

let user: User;

describe("user registration with randomized test data using faker.js", () => {
  before(() => {
    cy.visit("https://www.automationexercise.com/login");
  });

  it("successfull registration using data generated data by faker.js", () => {
    // ARRANGE
    user = userData;
    console.log(user);

    // ACT
    register.fillNewUserSignUpForm(user);
    common.clickButton("Signup");
    register.fillAccountInformation(user);
    register.fillAddressInformation(user);
    common.clickButton("Create Account");

    // ASSERT
    common.assertText("Account Created!");
  });
});
