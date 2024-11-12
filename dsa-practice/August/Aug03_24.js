// ! Largest subarray with sum 0

function maxLen(arr, n) {
  //code here
  let r = 0,
    sum = 0,
    ans = 0
  let map = {}
  while (r < n) {
    sum += arr[r]

    if (map.hasOwnProperty(sum)) {
      ans = Math.max(ans, r - map[sum])
    } else if (sum == 0) {
      ans = Math.max(ans, r + 1)
    } else {
      map[sum] = r
    }
    r++
  }
  console.log(ans)
  return ans
}

let arr = [15, -2, 2, -8, 1, 7, 10, 23]
let n = arr.length
maxLen(arr, n)
