describe("First passing testing with Jest", () => {
  test("adds 1 + 2 equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});

describe("First failing testing with Jest", () => {
  test("adds 1 + 1 does not equal 3", () => {
    expect(1 + 1).toBe(3);
  });
});
