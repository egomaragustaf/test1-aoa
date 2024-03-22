import { ascendingSort, descendingSort } from "../src/sort";
import { describe, test, expect } from "@jest/globals";

describe("Ascending Sort", () => {
  test("Returns correct value", () => {
    expect(ascendingSort([8, 5, 3, 9, 1, 7, 2, 4, 6, 10])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});

describe("Descending Sort", () => {
  test("Returns correct value", () => {
    expect(descendingSort([8, 5, 3, 9, 1, 7, 2, 4, 6, 10])).toEqual([
        10, 9, 8, 7, 6, 5, 4, 3, 2, 1
    ]);
  });
});
