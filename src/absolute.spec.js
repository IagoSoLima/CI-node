const absolute = require("./absolute");

test("Should be return absolute number ", () => {
  const absN1 = absolute(-3);
  const absN2 = absolute(-9);
  expect(absN1).toBe(3);
  expect(absN2).toBe(9);
});
