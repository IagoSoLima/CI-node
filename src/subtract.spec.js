const subtract = require("./subtract");

test("should be subtract two numbers", () => {
  const result = subtract(3, 3);
  expect(result).toBe(0);
});
