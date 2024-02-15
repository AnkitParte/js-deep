import {print} from '../commonHelper/index.js'

Array.prototype.myMap = function (callback) {
    let op = []
    for (let i=0;i<this.length;i++) {
        op.push(callback(this[i], i, this))
    }
    return op
}

let tempArr = [1, 2, 3, 4, 5]
print('tempArr Updates -> ', tempArr.myMap((e) => e * 2))

Array.prototype.myFilter = function (callback) {
    let op = []
    for (let i=0;i<this.length;i++) {
        let val = callback(this[i], i, this)
        if (val){
            op.push(this[i])
        }
    }
    return op
}

let tempArr2 = [1, 2, 3, 4, 5]
print('tempArr2 Updates -> ', tempArr2.myFilter((e) => e%2 == 0))