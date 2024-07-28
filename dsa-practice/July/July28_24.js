//! Majority element 2
// find all elements that appear more than ⌊ n/3 ⌋ times. n=length of array
var majorityElement = function (nums) {
  let len = nums.length
  let map = {}
  let ans = [],
    freq = Math.floor(len / 3)
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] + 1 || 1

    if (map[nums[i]] == freq + 1) {
      ans.push(nums[i])
    }
  }
  console.log(ans)
  return ans
}
let arr = [1, 1, 1, 2, 2, 3, 3, 2]
// majorityElement(arr)

var subarraySum = function (nums, k) {
  let occur = { 0: 1 },
    sum = 0,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]

    if (occur.hasOwnProperty(sum - k)) {
      count += occur[sum - k]
    }
    occur[sum] = occur[sum] + 1 || 1
  }
  console.log(count)
  return count
}
let nums = [1, 1, 1],
  k = 2
// subarraySum(nums, k)
