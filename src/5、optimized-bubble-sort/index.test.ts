import { bubbleSort } from "./index";

describe("optimized bubble sort", () => {
  it("should handle empty array", () => {
    const arr: number[] = [];
    const sortedArr: number[] = [];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  it("should handle array with single element", () => {
    const arr = [1];
    const sortedArr = [1];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  it("should handle array that elements has already been sorted", () => {
    const arr = [1, 2, 3];
    const sortedArr = [1, 2, 3];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  it("should make elements sorted by ascending order", () => {
    const arr = [3, 1, 2];
    const sortedArr = [1, 2, 3];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  it("should sort array with both positive and negative elements", () => {
    const arr = [2, 1, 3, -2, -1, -3];
    const sortedArr = [-3, -2, -1, 1, 2, 3];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });

  it("should sort array with both decimal and integer element", () => {
    const arr = [3, 1, 2, 0.5, 12.5];
    const sortedArr = [0.5, 1, 2, 3, 12.5];
    expect(bubbleSort(arr)).toEqual(sortedArr);
  });
});
