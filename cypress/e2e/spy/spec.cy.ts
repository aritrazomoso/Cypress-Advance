describe("Example of spy", () => {
  const obj = {
    sum: (a: number, b: number) => a + b,
  };
  it("Example", () => {
    cy.spy(obj, "sum");
    expect(obj.sum(1, 2)).to.equal(3);
    expect(obj.sum).to.have.been.called;
  });
});
