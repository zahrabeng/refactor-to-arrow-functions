import divide from "./divide";

test("divide returns the result of dividing a first number by a second number", () => {
  expect(divide(4, 2)).toBe(2);
  expect(divide(2, 4)).toBe(0.5);
  expect(divide(1, 4)).toBe(0.25);
});
