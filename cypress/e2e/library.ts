describe("using selectors and testing library approach", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://www.stxnext.com/blog");
  });

  it("should find blog link on stx page using testing library and selector", () => {
    cy.findByRole("menuitem", { name: /blog/i });
    // cy.get().click();
  });
});
