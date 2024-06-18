class Solution {
  partition(arr, low, high) {
    // Your code here
    let pivot = arr[low];
    let pIdx = low;
    let i = low,
      j = high;
    while (i < j) {
      while (arr[i] <= pivot && i <= high - 1) i++;
      while (arr[j] > pivot && j >= low + 1) j--;
      if (i < j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[j], arr[pIdx]] = [arr[pIdx], arr[j]];
    return j;
  }

  quickSort(arr, low, high) {
    //code here
    if (low >= high) return;
    let pivot = this.partition(arr, low, high);
    this.quickSort(arr, low, pivot - 1);
    this.quickSort(arr, pivot + 1, high);
  }
}
