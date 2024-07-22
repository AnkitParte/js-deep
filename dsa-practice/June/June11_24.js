function printAllDivisors(N) {
    let ans = 0
        for (let i=1;i<=N;i++) {
         ans += allDivisors(i)   
        }
        return ans
}
function allDivisors(n) {
    if (n==1) return n
    let ans = 0
    console.log('n---->',n)
    for (let i=1;i<=Math.floor(Math.sqrt(n));i++) {
        if (n%i == 0) {
            console.log('i-',i)
            ans += i
            let x = n/i
            if (x != i) {
                ans += x
            }
            console.log('x-',x)
        }
    }
    // console.log(n, ans+n)
    console.log('ans--',ans)
    return ans
}
console.log(printAllDivisors(6))

//optimal one is
