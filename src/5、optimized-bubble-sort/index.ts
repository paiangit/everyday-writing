function swap(arr: number[], i: number, j: number) {
  const temp = arr[i]
  arr[i] = arr[j];
  arr[j] = temp;
}

export function bubbleSort(arr: number[]) {
  const len = arr.length;
  let swapped = false;

  for (let i = len - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j+1);
        swapped = true;
      }
    }

    // if no elements was swapped in the inner loop, that means all elements in the array have been sorted.
    if (!swapped) {
      break;
    }
  }
  return arr;
}
