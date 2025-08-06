// function foo() {
//   var x = "Hello, " + y;
//   console.log(x);
//   var y = "Bob";
// }

// console.log(window.foo());

// // 唯一的全局变量MYAPP:
// let MYAPP = {};

// // 其他变量:
// MYAPP.name = "myapp";
// MYAPP.version = 1.0;

// // 其他函数:
// MYAPP.foo = function () {
//   return "foo";
// };

// console.log(MYAPP.name);

// // 如果浏览器支持解构赋值就不会报错:
// let [x, y, z] = ["hello", "JavaScript", "ES6"];

// // x, y, z分别被赋值为数组对应元素:
// console.log(`x = ${x}, y = ${y}, z = ${z}`);

// let [x, [y, z]] = ["hello", ["JavaScript", "ES6"]];
// x; // 'hello'
// y; // 'JavaScript'
// z; // 'ES6'

let person = {
  username: "小明",
  age: 20,
  gender: "male",
  passport: "G-12345678",
  school: "No.4 middle school",
};
let { username, age, passport } = person;

// name, age, passport分别被赋值为对应属性:
console.log(`username = ${username}, age = ${age}, passport = ${passport}`);
