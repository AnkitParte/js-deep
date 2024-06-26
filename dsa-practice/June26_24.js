function findUnion(arr1, arr2, n, m) {
  //your code here
  let set1 = new Set(arr1)
  let uniqueKeysArray = Array.from(set1)
  arr1 = uniqueKeysArray
  n = arr1.length

  let set2 = new Set(arr2)
  let uniqueKeysArray2 = Array.from(set2)
  arr2 = uniqueKeysArray2
  m = arr2.length
  console.log(arr1)
  console.log(arr2)
  let ans = [],
    i = 0,
    j = 0
  while (i < n && j < m) {
    if (arr1[i] == arr2[j]) {
      ans.push(arr1[i])
      i++
      j++
    } else if (arr1[i] > arr2[j]) {
      let temp = arr2[j]
      if (ans.length > 0 && temp != ans[ans.length - 1]) {
        ans.push(temp)
      } else if (ans.length == 0) {
        ans.push(temp)
      }
      j++
    } else if (arr1[i] < arr2[j]) {
      let temp = arr1[i]
      if (ans.length > 0 && temp != ans[ans.length - 1]) {
        ans.push(temp)
      } else if (ans.length == 0) {
        ans.push(temp)
      }
      i++
    }
  }
  console.log(ans, "l1", i, j)
  while (i < n) {
    let temp = arr1[i]
    if (ans.length > 0 && temp != ans[ans.length - 1]) {
      ans.push(temp)
    } else if (ans.length == 0) {
      ans.push(temp)
    }
    i++
  }
  console.log(ans, "l2", i, j)
  while (j < m) {
    let temp = arr2[j]
    if (ans.length > 0 && temp != ans[ans.length - 1]) {
      ans.push(temp)
    } else if (ans.length == 0) {
      ans.push(temp)
    }
    j++
  }
  console.log(ans, "l3", i, j)
  return ans
}
let arr1 = [-7, -7, -7, 8],
  arr2 = [-8, -3, 8],
  n = arr1.length,
  m = arr2.length

findUnion(arr1, arr2, n, m)
// let set1 = new Set(arr1)
// let uniqueKeysArray = Array.from(set1)
// // console.log(set1.keys())
// console.log(uniqueKeysArray)
