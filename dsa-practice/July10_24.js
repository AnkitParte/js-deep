function lenOfLongSubArr(arr, n, k) {
  //code here

  let len = 0
  let sum = 0
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]

    if (sum == k) {
      len = Math.max(len, i + 1)
    }

    let tp = sum - k
    if (map.hasOwnProperty(tp)) {
      len = Math.max(len, i - map[tp])
    }

    if (!map.hasOwnProperty(sum)) {
      map[sum] = i
    }
  }
  //   console.log(len)
  return len
  console.log(len)
}
let arr = "8 -9 10 -2 -10 6 18 17".split(" ").map((n) => +n)

// let arr = [10, 5, 2, 7, 1, 9],
let k = 17
lenOfLongSubArr(arr, arr.length, k)
