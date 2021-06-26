import swapIndices from "./swap-indices";

test("swapIndices swaps two characters at given index positions in a string", () => {
  expect(swapIndices("hello", 0, 1)).toBe("ehllo");
  expect(swapIndices("hello", 1, 0)).toBe("ehllo");
  expect(swapIndices("hello", 1, 4)).toBe("holle");
  expect(swapIndices("hello world", 6, 10)).toBe("hello dorlw");
});
