//Insertion sort

function insertionSort(arr, n) {
  //code here
  for (let i=0;i<n;i++) {
    let j=i
    while(j>0 && arr[j] < arr[j-1]) {
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        j--
    }
}
console.log(arr)
return arr
}

insertionSort([4,1,3,9,7], 5)
