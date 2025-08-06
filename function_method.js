// let yuze = {
//   name: "yuze",
//   birth: 2010,
//   age: function () {
//     let y = new Date().getFullYear();
//     return y - this.birth;
//   },
// };

// console.log(yuze.age); // function yuze.age()
// console.log(yuze.age()); // 今年调用是25,明年调用就变成26了

// function getAge() {
//   let y = new Date().getFullYear();
//   return y - this.birth;
// }

// let xiaoming = {
//   name: "小明",
//   birth: 1990,
//   age: getAge,
// };

// console.log(xiaoming.age()); // 25
// console.log(getAge.apply(xiaoming, [])); // 25, this指向xiaoming, 参数为空

// 'use strict';

let count = 0;
let oldParseInt = parseInt; // 保存原函数

window.parseInt = function (...args) {
  count += 1;
  //   return oldParseInt.apply(null, arguments); // 调用原函数
  return oldParseInt(args);
};

// 测试:
console.log(parseInt("10"));
console.log(parseInt("20"));
console.log(parseInt("30"));
console.log("count = " + count); // 3
