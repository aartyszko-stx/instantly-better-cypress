import { Book } from "cypress/interfaces/book";

describe("Random User Generator API Tests", () => {
  const baseUrl = "https://fakerestapi.azurewebsites.net/api/v1/";

  it("should POST book", { tags: ["@regression", "@smoke"] }, () => {
    const book: Book = {
      id: 2,
      title:
        "How to Talk to Your Cat About Safety: And Abstinence, Drugs, Satanism, and Other Dangers That Threaten Their Nine Lives",
      description:
        "Long gone are the good old days when a cat's biggest worries were mean dogs or a bath. Modern cats must confront satanists, online predators, the possibility of needing to survive in a post-apocalyptic(...)",
      pageCount: 100,
      excerpt: "Fragment",
      publishDate: "2021-01-01T00:00:00Z",
    };

    cy.request({
      method: "POST",
      url: `${baseUrl}/Books`,
      body: book,
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.id).to.equal(2);
      expect(response.body.title).to.equal(book.title);
      expect(response.body.description).to.equal(book.description);
      expect(response.body.pageCount).to.equal(book.pageCount);
      expect(response.body.excerpt).to.equal(book.excerpt);
      expect(response.body.publishDate).to.equal(book.publishDate);
    });
  });

  it("should not POST book with missing title", { tags: "regression" }, () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/Books`,
      body: "",
      failOnStatusCode: false,
    }).then((response) => {
      console.log(response.body);
      expect(response.status).to.equal(415);
      expect(response.body.title).to.equal("Unsupported Media Type");
    });
  });
});
