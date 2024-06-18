//! Quick sort = Divide & Conquer
/*
1. Pick a pivot and place it in it's correct position in the sorted array
2. Smaller on the left and larger on the right
Pivot can be a 
a. 1st element
b. last element
c. middle element
d. random element
*/

//[ 2, 1, 6, 10, 4, 1, 3, 9, 7]
let arr = [2, 1, 6, 10, 4, 1, 3, 9, 7];
let n = arr.length;
function partition(arr, low, high) {
  // Your code here
  let pivot = arr[low];
  let pIdx = low;
  let i=low,j=high
  while (i < j) {
    while (arr[i] <= pivot && i <= high-1) i++;
    while (arr[j] > pivot && j >= low+1) j--;
    if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[j], arr[pIdx]] = [arr[pIdx], arr[j]]
  return j;
}

function quickSort(arr, low, high) {
  //code here
  if (low >= high) return;
  let pivot = partition(arr, low, high);
  quickSort(arr, low, pivot - 1);
  quickSort(arr, pivot + 1, high);
}
console.log("un-sorted", arr);
quickSort(arr, 0, n - 1);
console.log("sorted", arr);
