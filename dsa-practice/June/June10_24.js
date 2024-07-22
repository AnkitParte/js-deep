//Concept:1 - gcd ans lcm
function gcd(a,b) {
    while (a>0 && b>0) {
        if (a>b) a = a % b
        else b = b % a
    }
    if (a==0) return b
    return a
}
// let ans = gcd(52, 10)
// let lcm  = (53*10)/ans
// console.log(ans)

//Concept:2 - Armstrong number
function calForArmstrongNum(num) {
    let ans = 0
    while(num>0) {
        let rem = num % 10
        ans += (rem**3)
        num = Math.floor(num/10)
    }
    return ans
}
let n = 371
let armNum = calForArmstrongNum(n)
console.log(n == armNum ? true : false)