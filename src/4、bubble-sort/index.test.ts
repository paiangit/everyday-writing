import { bubbleSort } from './index';

describe('bubbleSort', () => {
  it('should correctly sort an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it('should handle array with one item', () => {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('should sort an array of numbers in ascending order', () => {
    const input = [2, 3, 1];
    const sorted = [1, 2, 3];
    expect(bubbleSort(input)).toEqual(sorted);
  });

  it('should handle array with all identical elements', () => {
    const input = [2, 2, 2];
    const sorted = [2, 2, 2];
    expect(bubbleSort(input)).toEqual(sorted);
  });

  it('should handle array that is already sorted in descending order', () => {
    const input = [1, 2, 3];
    const sorted = [1, 2, 3];
    expect(bubbleSort(input)).toEqual(sorted);
  });

  it('should sort an array with positive and negative numbers', () => {
    const input = [-3, 1, 0, -1, 2, -2, 3];
    const sorted = [-3, -2, -1, 0, 1, 2, 3];
    expect(bubbleSort(input)).toEqual(sorted);
  });
});
