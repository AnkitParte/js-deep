var reverse = function(x) {
    let ans = ""
    let flag = x < 0 ? true : false
    x = flag ? -1*x : x
    while (x) {
        let t = x % 10
        ans += t
        x = Math.floor(x / 10)
    }
    ans = Number(flag ? '-'+ans : ans)
    console.log(ans)
    if(Math.pow(2, -31) < ans && ans < Math.pow(2, 31)) {
        return ans
    }
    return 0
};

reverse(-123)