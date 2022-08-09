`use strict`;

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];

    while (j >= 0 && temp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
      arr;
    }
    arr[j + 1] = temp;
    console.log(arr);
  }
  return arr;
}

console.log(insertionSort([8,4,23,42,16,15]));
module.exports = insertionSort;
