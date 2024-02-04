export function quickSortRecursive(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  // take the first element as the pivot
  const pivot = arr[0];

  const left: number[] = [];
  const right: number[] = [];

  // put the elements smaller than the pivot to the left and the elements greater than the pivot to the right
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
}
