var moveZeroes = function (nums) {
    let n = nums.length
    let k
    if (n<=1) return nums
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0 && k == undefined) {
            k = i
        } else if (nums[i] != 0 && k!=undefined) {
            [nums[i], nums[k]] = [nums[k], nums[i]]
            k++
        }
    }
    console.log(nums)
    return nums
};

let nums=[0,1,0,3,12]
moveZeroes(nums)