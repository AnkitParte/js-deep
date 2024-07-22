var missingNumber = function (nums) {
  let n = nums.length
  let ansArr = new Array(n + 1).fill(0)
  for (let i = 0; i < n; i++) {
    ansArr[nums[i]] = 1
  }
  for (let i = 0; i < ansArr.length; i++) {
    if (ansArr[i] == 0) {
      console.log(i)
      return i
    }
  }
}
let nums = [3, 0, 1]
missingNumber(nums)
