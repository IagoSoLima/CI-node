const multiplication = require("./multiplication");

test("should be multiplication two numbers", () => {
  const result = multiplication(3, 3);
  expect(result).toBe(9);
});
