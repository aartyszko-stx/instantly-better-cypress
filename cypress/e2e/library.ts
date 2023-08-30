describe("using selectors and testing library approach", () => {
  before(() => {
    cy.visit("https://www.stxnext.com/");
  });

  it("should find blog link on stx page using selector", () => {
    // cy.get().click();
  });

  it("should find blog link on stx page using testing library", () => {
    // cy.findByRole().click();
  });
});
