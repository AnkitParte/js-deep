//! Selection Sort
function selectionSort(arr, n) {
  //code here
  for (let i = 0; i < n; i++) {
    let tmp = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[tmp]) tmp = j;
    }
    let temp = arr[i];
    arr[i] = arr[tmp];
    arr[tmp] = temp;
  }
  console.log(arr);
  return arr;
}
let arr = [4, 1, 3, 9, 7];
let n = 5;

// selectionSort(arr, n);

function bubbleSort(arr, n) {
  //code here\
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log(arr);
  return arr;
}

bubbleSort(arr,n)
