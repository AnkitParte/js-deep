//! Leaders in an array

function leaders(n, arr) {
  // code here
  let max = -1
  let ans = []
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] >= max) {
      ans.push(arr[i])
      max = arr[i]
    }
  }
  console.log(ans.reverse())
  return ans.reverse()
}
let arr = [16, 17, 4, 3, 5, 2]
let n = arr.length
// leaders(n, arr)

function longestConsecutiveBetter(arr) {
  // code here
  let n = arr.length
  arr = arr.sort((a, b) => a - b)
  let lastMin = -100
  let currCount = 0,
    ans = 0
  for (let i = 0; i < n; i++) {
    if (arr[i] - lastMin == 1) {
      lastMin = arr[i]
      currCount++
    } else {
      lastMin = arr[i]
      currCount = 1
    }
    ans = Math.max(ans, currCount)
  }
  console.log(ans)
  return ans
}
let arr1 = [1, 1, 1, 101, 100, 103, 102, 2, 3, 4, 5]
// longestConsecutiveBetter(arr1)

function longestConsecutiveOpt(arr) {
  // code here
  let n = arr.length
  let obj = {}
  let ans = 0
  for (let i = 0; i < n; i++) {
    obj[arr[i]] = true
  }

  for (let key in obj) {
    if (!obj[key - 1]) {
      let c = 1

      let k = Number(key) + 1
      while (obj[k]) {
        k++
        c++
      }
      ans = Math.max(c, ans)
    }
  }
  console.log(ans)
  return ans
}

longestConsecutiveOpt(arr1)
