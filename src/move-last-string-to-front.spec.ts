import moveLastStringToFront from "./move-last-string-to-front";

test("moveLastStringToFront moves the last string in an array to the front", () => {
  expect(moveLastStringToFront(["hello", "world"])).toEqual(["world", "hello"]);

  expect(moveLastStringToFront(["a", "b", "c", "d"])).toEqual([
    "d",
    "a",
    "b",
    "c",
  ]);

  expect(
    moveLastStringToFront(["cat", "sat", "on", "the", "mat", "the"]),
  ).toEqual(["the", "cat", "sat", "on", "the", "mat"]);

  expect(moveLastStringToFront(["boring"])).toEqual(["boring"]);
});
