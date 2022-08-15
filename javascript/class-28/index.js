`use strict`;

let arr1 = [10, 7, 8, 9, 1, 5];

function quickSort(arr, left, right) {
  if (left < right) {
    let position = partition(arr, left, right);
    quickSort(arr, left, position - 1);
    quickSort(arr, position + 1, right);
  }
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let low = left - 1;
  for (let i = left; i <= right - 1; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }
  swap(arr, right, low + 1);
  return low + 1;
}

function swap(arr, i, low) {
  let temp;
  temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

quickSort(arr1, 0, 5);
console.log(arr1);

module.exports = quickSort;
