//!Basic recursion

//1. Print numbers from 1 to N without the help of loops.
let ans = "";
function print(n) {
  // console.log(n)
  ans = n + " " + ans;
  if (n == 1) return;
  print(n - 1);
}
// print(N)
// console.log(ans)

//2. Print GFG n times without the loop.
let ans2 = "";
function printGfg(n) {
  ans2 = "GFG" + " " + ans2;
  if (n == 1) return;
  printGfg(n - 1);
}
printGfg(5);
console.log(ans2);

//3.
