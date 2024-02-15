import {print} from '../commonHelper/index.js'

// Currying Example
function curryingAdd (a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
} 
let ex1 = curryingAdd(1)(2)(3)
print('ex1 -> ', ex1)

// Infinite Currying Example
function infiCurryingAdd(a) {
    return function (b) {
        if(!b) return a
        return infiCurryingAdd(a+b)
    }
}

let ex2 = infiCurryingAdd(1)(2)(3)(4)(5)(6)()
print('ex2 -> ', ex2)