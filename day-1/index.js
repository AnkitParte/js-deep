//! JS one liners
/*
document.designMode = 'on'
run this on browser and magic
*/

//! Create array of unique elements
let basket1 = ['apple', 'orange', 'mango']
let basket2 = ['grapes', 'orange', 'melon']

let bigBasket = [...new Set([...basket1, ...basket2])]

// console.log('bigBasket', bigBasket)

let tableData = [
    {id:1, title: 'One Row', status: false},
    {id:2, title: 'Two Row', status: true},
    {id:3, title: 'Third Row', status: false}
]
console.table(tableData)