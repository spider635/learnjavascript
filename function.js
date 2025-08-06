// function abs(x) {
//   if (x >= 0) {
//     return x;
//   } else {
//     return -x;
//   }
// }

// let abs = function (x) {
//   if (typeof x !== "number") {
//     throw "Not a number.";
//   }

//   for (let i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }

//   if (x >= 0) {
//     return x;
//   } else {
//     return -x;
//   }
// };

// console.log(abs(10));
// console.log(abs(-190, 1, 2, 3, 4));
// console.log(abs()); // 传入的参数比定义的少也没有问题。 返回NaN

// function abs() {
//   if (arguments.length === 0) {
//     return 0;
//   }
//   let x = arguments[0];
//   return x >= 0 ? x : -x;
// }

// abs(); // 0
// abs(10); // 10
// abs(-9); // 9

function foo(a, b, ...args) {
  console.log("a = " + a);
  console.log("b = " + b);
  console.log(args);
}

foo(1);
