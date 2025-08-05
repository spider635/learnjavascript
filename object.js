let xiaoming = {
  name: "小明",
  birth: 1990,
  school: "No.1 Middle School",
  height: 1.7,
  weight: 65,
  score: null,
};

// delete xiaoming.name;
// console.log(xiaoming.name);

// xiaoming.age = 34;
// console.log(xiaoming.age);

// if ("score" in xiaoming) {
//   console.log("true");
// }

if (xiaoming.hasOwnProperty("birth")) {
  console.log("true");
}
