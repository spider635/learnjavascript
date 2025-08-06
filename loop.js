// let x = 0;
// let i;

// for (i = 1; i <= 10000; i++) {
//   x = x + i;
// }

// console.log(x);

// let arr = ["Apple", "Google", "Microsoft"];
// let i, x;
// for (i = 0; i < arr.length; i++) {
//   x = arr[i];
//   console.log(x);
// }

// let o = {
//   name: "Jack",
//   age: 20,
//   city: "Beijing",
// };
// for (let key in o) {
//   console.log(key); // 'name', 'age', 'city'
// }

// let o = {
//   name: "Jack",
//   age: 20,
//   city: "Beijing",
// };
// for (let key in o) {
//   if (o.hasOwnProperty(key)) {
//     console.log(key); // 'name', 'age', 'city'
//   }
// }

// let a = ["A", "B", "C"];
// for (let i in a) {
//   console.log(i); // '0', '1', '2'
//   console.log(a[i]); // 'A', 'B', 'C'
// }

// let x = 0;
// let n = 99;
// while (n > 0) {
//   x = x + n;
//   n = n - 2;
// }
// console.log(x); // 2500

let n = 0;
do {
  n = n + 1;
} while (n < 100);
n; // 100
