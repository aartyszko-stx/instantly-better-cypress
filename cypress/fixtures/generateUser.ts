import { faker } from "@faker-js/faker";

export interface User {
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  password: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  isNewsletterSubscribed: boolean;
  isSpecialOffersSubscribed: boolean;
  company: string;
  address: string;
  address2: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
}

export const generateUser = () => {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const title = faker.helpers.arrayElement(["Mr.", "Mrs."]);
  const country = faker.helpers.arrayElement([
    "India",
    "United States",
    "Canada",
    "Australia",
    "Israel",
    "New Zealand",
    "Singapore",
  ]);

  return {
    firstName,
    lastName,
    title,
    email: faker.internet.email({ firstName, lastName }),
    password: faker.internet.password({
      length: 8,
      memorable: true,
      pattern: /[A-Z]/,
    }),
    dateOfBirth: {
      day: faker.number.int({ min: 1, max: 31 }).toString(),
      month: faker.date.month(),
      year: faker.number.int({ min: 1990, max: 2021 }).toString(),
    },
    isNewsletterSubscribed: faker.datatype.boolean(),
    isSpecialOffersSubscribed: faker.datatype.boolean(),
    company: faker.company.name(),
    address: faker.location.streetAddress(),
    address2: faker.location.secondaryAddress(),
    country: country,
    state: faker.location.state(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    mobileNumber: faker.phone.number("+48 91 ### ## ##"),
  };
};
