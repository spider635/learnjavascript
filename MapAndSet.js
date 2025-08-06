// let m = new Map();
// let s = new Set();
// console.log("你的浏览器支持Map和Set！"); // 直接运行测试

// let m = new Map([
//   ["Michael", 95],
//   ["Bob", 75],
//   ["Tracy", 85],
// ]);
// let x = m.get("Michael"); // 95
// console.log(x);

// let s = new Set([1, 2, 3, 3, "3"]);
// s; // Set {1, 2, 3, "3"}

// console.log(s);

// s.add(4);
// s; // Set {1, 2, 3, 4}
// s.add(4);
// s; // 仍然是 Set {1, 2, 3, 4}
// console.log(s);

let s = new Set([1, 2, 3]);
s; // Set {1, 2, 3}
s.delete(3);
s; // Set {1, 2}
console.log(s);
