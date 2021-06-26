import isFirstElementGreaterThanTen from "./is-first-element-greater-than-ten";

test("isFirstElementGreaterThanTen returns whether or not the first element in an array is greater than 10", () => {
  expect(isFirstElementGreaterThanTen([11, 3])).toBe(true);
  expect(isFirstElementGreaterThanTen([3, 11])).toBe(false);
  expect(isFirstElementGreaterThanTen([10])).toBe(false);
});
