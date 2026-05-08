const { isNonEmptyValue, isValidPositivePrice } = require("../js/validation");

test("should fail for empty registration value", () => {
  expect(isNonEmptyValue("")).toBe(false);
});

test("should pass for valid registration value", () => {
  expect(isNonEmptyValue("john@uni.edu")).toBe(true);
});

test("should fail for negative product price", () => {
  expect(isValidPositivePrice(-9.99)).toBe(false);
});

test("should pass for positive product price", () => {
  expect(isValidPositivePrice(9.99)).toBe(true);
});
