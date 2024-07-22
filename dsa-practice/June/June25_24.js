let arr = [
  { id: 1, name: "Alice" },
  { id: 7, name: "Bob" },
  { id: 9, name: "Meir" },
  { id: 11, name: "Winston" },
  { id: 13, name: "Jonathan" }
]
let n = arr.length
let idLen = 1,
  nameLen = 0
for (let i = 0; i < n; i++) {
  idLen = Math.max(idLen, (arr[i].id + "").length)
  nameLen = Math.max(nameLen, arr[i].name.length)
}

for (let i = -1; i < n; i++) {
  if (i == -1) {
    let l1 = idLen - 2,
      l2 = nameLen - 4
    console.log(`| id${" ".repeat(l1)} | name${" ".repeat(l2)} |`)
    console.log(`| ${"-".repeat(idLen)} | ${"-".repeat(nameLen)} |`)
  } else {
    let l1 = idLen - (arr[i].id + "").length,
      l2 = nameLen - (arr[i].name + "").length
    console.log(`| ${arr[i].id}${" ".repeat(l1)} | ${arr[i].name}${" ".repeat(l2)} |`)
  }
}
