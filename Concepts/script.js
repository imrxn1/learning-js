"use strict";

// function calcAge(birthYear) {
//   const age = 2026 - birthYear;
//   // console.log(firstName);

//   function printAge() {
//     const output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1997 && birthYear <= 2012) {
//       const str = `you are a genz, ${firstName}`;
//       console.log(str);
//       var genz = true;

//       function add(a, b) {
//         console.log(a + b);
//       }
//     }
//     console.log(genz);
//     // add(2,3);
//   }
//   printAge();

//   return age;
// }

// const firstName = "Imran";
// calcAge(2004);

// // console.log(me);
// // console.log(job);
// // console.log(year);

// var me = "imran";
// let job = "student";
// const year = 2004;

// //functions
// // console.log(addDec(2,3));
// // console.log(addExpr(2,3));
// // console.log(addArr(2,3))

// function addDec(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArr = (a, b) => a + b;

// console.log(this);

// const calcAge1 = function (birthYear) {
//   console.log(2026 - birthYear);
//   console.log(this);
// };

// calcAge1(2004);

// const calcAge2 = (birthYear) => {
//   console.log(2026 - birthYear);
//   console.log(this);
// };

// calcAge2(2004);

// const imran = {
//   year: 2004,
//   calcAge: function () {
//     console.log(2026 - this.year);
//     console.log(this);
//   },
// };
// imran.calcAge();

// const sahil = {
//   year: 2006,
// }

// sahil.calcAge = imran.calcAge;

// sahil.calcAge();

// var firstName = "sahil";

// const imran = {
//   firstName: "imran",
//   year: 2004,

//   calcAge: function () {
//     console.log(2026 - this.year);
//     // console.log(this);

//     //solution 1
//     //   const self = this; // self or that
//     //   const isMillenial = function () {
//     //     console.log(self);
//     //     // console.log(this.year >= 1981 && this.year <= 1996);
//     //     console.log(self.year >= 1981 && self.year <= 1996);
//     //   }
//     //   isMillenial();
//     // },

//     //solution 2
//     const isMillenial = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);

//     console.log(`hey ${this.firstName}`);
//   },
// };

// // imran.greet();
// // console.log(this.firstName);

// imran.calcAge();

// //argument keywords
// const addExpr = function (a, b) {
//   console.log(arguments);

//   return a + b;
// };

// addExpr(2, 3);
// addExpr(2, 3, 4, 12);

// const addArr = (a, b) => {
//   console.log(arguments);

//   return a + b;
// };

// addArr(2,3);

// let age = 22;
// let oldAge = age;
// age = 23;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'imran',
//   age: 22,
// }

// const friend = me;
// friend.age = 25;
// console.log(me.age);
// console.log(friend.age);

let lastName = "nazir";
let oldLastName = lastName;
lastName = "sk";
// console.log(lastName,oldLastName);

const imran = {
  firstName: "imran",
  lastName: "nazir",
  age: 22,
};

const newImran = imran;
newImran.lastName = "sk";
// console.log(newImran);
// console.log(imran);

// newImran = {};

// copying obj

const imran1 = {
  firstName: "imran",
  lastName: "nazir",
  age: 22,
  family: ["sahil", "jakir"],
};

const imranCopy = Object.assign({}, imran1);
imranCopy.lastName = "sk";
console.log(imranCopy);
console.log(imran1);

imranCopy.family.push("rahul");
imranCopy.family.push("rinku");
console.log(imranCopy);
console.log(imran1);
