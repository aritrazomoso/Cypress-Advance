describe("Example Stub", () => {
  const obj = {
    sum: (a: number, b: number) => a + b,
  };
  it("Testing Stub 1", () => {
    cy.stub(obj, "sum").returns(3);

    expect(obj.sum(10, 30)).to.eq(3);
    expect(obj.sum(13, 33)).to.eq(3);
    expect(obj.sum(10, 35)).to.eq(45);
  });
  it("Restore stub", () => {
    const s = cy
      .stub(obj, "sum")
      .onFirstCall()
      .returns(1)
      .onSecondCall()
      .returns(2)
      .onThirdCall()
      .returns(3);
    expect(obj.sum(10, 30)).to.eq(1);
    expect(obj.sum(13, 33)).to.eq(2);
    expect(obj.sum(10, 35)).to.eq(3);
    s.restore();
    expect(obj.sum(10, 35)).to.eq(45);
  });
});
