class Solution {
  merge(arr, l, m, r) {
    // Your code here
  }
  mergeAll(arr, low, mid, high) {
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

  mergeSort(arr, low, high) {
    if (low >= high) return;
    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    return this.mergeAll(arr, low, mid, high);
  }
}
