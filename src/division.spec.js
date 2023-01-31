const division = require("./division");

test("should be division two numbers", () => {
  const result = division(3, 3);
  expect(result).toBe(1);
});
