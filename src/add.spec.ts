import add from "./add";

test("add returns the sum of two numbers", () => {
  expect(add(4, 3)).toBe(7);
  expect(add(-1, 0)).toBe(-1);
  expect(add(100, 200)).toBe(300);
});
