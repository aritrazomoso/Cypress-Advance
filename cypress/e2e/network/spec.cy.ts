describe("template spec", () => {
  it.skip("testing network request intercept 1", () => {
    cy.visit("https://dummyapi.io/explorer");
    cy.intercept({
      path: "/data/v1/user?limit=10",
    }).as("users");
    cy.wait("@users").then((res) => {
      expect(res.response?.body.limit).equal(10);
    });
  });
  it("testing network request intercept 2 fixing response from fixture", () => {
    cy.visit("https://dummyapi.io/explorer");
    cy.intercept("GET", "/data/v1/user?limit=10", { fixture: "data1.json" }).as(
      "users"
    );
    cy.wait("@users").then((res) => {
      expect(res.response?.body.limit).equal(5);
    });
  });
});
