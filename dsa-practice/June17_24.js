//Insertion sort

function insertionSort(arr, n) {
  //code here
  for (let i = 0; i < n; i++) {
    let j = i;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  console.log(arr);
  return arr;
}

let arr = [4, 1, 3, 9, 7];
let n = 5;
// insertionSort(arr, n)

//!Merge sort - Divide and merge

function mergeSort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);

  mergeSort(arr, low, mid);
  mergeSort(arr, mid + 1, high);

  return mergeAll(arr, low, mid, high);
}

function mergeAll(arr, low, mid, high) {
  let i = low,
    j = mid + 1;
  let newArr = [];
  while (i <= mid && j <= high) {
    if (arr[i] <= arr[j]) {
      newArr.push(arr[i]);
      i++;
    } else {
      newArr.push(arr[j]);
      j++;
    }
  }
  while (j <= high) {
    newArr.push(arr[j]);
    j++;
  }
  while (i <= mid) {
    newArr.push(arr[i]);
    i++;
  }
  let x = 0;
  for (let k = low; k <= high; k++) {
    arr[k] = newArr[x];
    x++;
  }
//   console.log("arr", arr);
  return arr;
}

let ans = mergeSort(arr, 0, n - 1);
console.log(ans);
