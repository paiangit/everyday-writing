import { selectionSort } from "./index";

test('should correct', () => {
  const arr = [9, 4, 5, 3, 2, 1];
  const sortedArr = selectionSort(arr);
  
  expect(sortedArr).toMatchObject([1, 2, 3, 4, 5, 9]);
});
