//!missing number optimal
var missingNumber = function (nums) {
  let n = nums.length
  let total = (n * (n + 1)) / 2
  for (let i = 0; i < n; i++) {
    total -= nums[i]
  }
  console.log(total)
  return total
}
let nums = [3, 0, 1]
// missingNumber(nums)

var missingNumber2 = function (nums) {
  let n = nums.length
  let xor1 = 0,
    xor2 = 0
  for (let i = 0; i < n; i++) {
    xor2 = xor2 ^ nums[i]
    xor1 = xor1 ^ (i + 1)
  }
  console.log(xor1 ^ xor2)
  return xor1 ^ xor2
}
missingNumber2(nums)
