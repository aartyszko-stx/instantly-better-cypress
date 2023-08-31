import { Author } from "cypress/interfaces/author";

describe("Random User Generator API Tests", { tags: "@regression" }, () => {
  const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/";

  it("should GET all authors", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/Authors`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.length.above(0);
    });
  });

  it("should GET author by id", { tags: ["@smoke", "@regression"] }, () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/Authors/1`,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(1);
      expect(response.body.idBook).to.equal(1);
      expect(response.body.firstName).to.exist;
      expect(response.body.lastName).to.exist;
    });
  });

  it("should POST author", () => {
    const author: Author = {
      id: 2,
      idBook: 2,
      firstName: "Wisława",
      lastName: "Szymborska",
    };

    cy.request({
      method: "POST",
      url: `${baseUrl}/Authors`,
      body: author,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(2);
      expect(response.body.idBook).to.equal(2);
      expect(response.body.firstName).to.equal("Wisława");
      expect(response.body.lastName).to.equal("Szymborska");
    });
  });
});
