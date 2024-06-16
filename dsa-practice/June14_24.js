var maxFrequency = function(nums, k) {
    nums = nums.sort((a,b) => a-b)
    // console.log(nums)
    let n = nums.length
    let ans = 0
    let total = 0,l=0,r=0
    let windLen
    while(r<n) {
        windLen = (r-l) + 1
        if (r==0) total += nums[r]
        let temp = true
        if (nums[r] * windLen <= (total + k)) {
            r++
            ans = Math.max(ans, windLen)
        } else {
            total -= nums[l]
            l++
            temp = false
        }
        if (temp) total += nums[r]
    }
    if (r>n-1) {
        ans = Math.max(ans, windLen-1)
    }
    console.log('ans', ans)
    return ans
};
maxFrequency([1,2,4], 5)