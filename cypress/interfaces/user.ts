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
