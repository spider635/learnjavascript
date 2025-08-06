// let a = [1, 2, 3, 4];

// for (let x of a) {
//   console.log(x);
// }

// let s = new Set([12, 13, 14]);
// for (let x of s) {
//   console.log(x);
// }

// let m = new Map([
//   ["name", "yb"],
//   ["age", 12],
//   [12, 13],
// ]);

// for (let x of m) {
//   console.log(x[0] + "=" + x[1]);
// }

let a = ["A", "B", "C"];
a.forEach(function (element, index, array) {
  // element: 指向当前元素的值
  // index: 指向当前索引
  // array: 指向Array对象本身
  console.log(`${element}, index = ${index}`);
});

// let s = new Set(["A", "B", "C"]);
// s.forEach(function (element, sameElement, set) {
//   console.log(element);
// });

// let m = new Map([
//   [1, "x"],
//   [2, "y"],
//   [3, "z"],
// ]);
// m.forEach(function (value, key, map) {
//   console.log(value);
// });
