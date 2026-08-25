// methods & this

// const rect = {
//   width: 100,
//   height: 50,

//   draw: function () {
//     console.log("i am a rectangle");
//     this.printProperties();
//     console.log(this);
//   },

//   printProperties: function () {
//     console.log(`my width is ${this.width} and my height is ${this.height}`);
//   },
// };

// rect.draw();
// // rect.height = 100;
// // rect.draw();

// function myFunc() {
//   console.log(this);
// }

// myFunc();

// const another = {
//     width: 47,
//     height: 56,
//     print: rect.printProperties,
// }

// another.print();

// factory pattern

// const createRect = function (width, height) {
//   return {
//     width: width,
//     height: height,

//     draw: function () {
//       console.log("i am a rectangle");
//       this.printProperties();
//       //   console.log(this);
//     },

//     printProperties: function () {
//       console.log(`my width is ${this.width} and my height is ${this.height}`);
//     },
//   };
// };

// const rect1 = createRect(10, 8);
// rect1.draw();

// const rect2 = createRect(40,30);
// rect2.draw();

//constructor pattern

// const Rectangle = function (width, height) {
//   this.width = width;
//   this.height = height;
//   this.draw = function () {
//     console.log("i am a rectangle");
//     this.printProperties();
//     //   console.log(this);
//   };

//   this.printProperties = function () {
//     console.log(`my width is ${this.width} and my height is ${this.height}`);
//   };
// };

// const rect3 = new Rectangle(10, 20);
// rect3.draw();

//new keyword
// function myNew (constructor) {
//     const obj = {}
//     Object.setPrototypeOf(obj, constructor.prototype);
//     const argsArray = Array.prototype.slice.apply(arguments);
//     constructor.apply(obj, argsArray.slice(1));
//     return obj;
// }

// const rect4 = myNew(Rectangle,45,30);
// rect4.draw();

// constructor property

//Call, Apply, Bind

// function myFunc(c,d) {
//     console.log(this);

//     console.log(this.a + this.b + c + d);

// }

// // myFunc.call({a:20, b:45}, 10, 5);

// // myFunc.apply({a:23, b:34},[10,5]);

// const testBind = myFunc.bind({a:45, b:56});
// testBind(5,5);

// myFunc();

//pass by value vs pass by reference
//call by value vs call by refernce

// let n = 10;

// pass by value- n is clone in function so real n does not change
// function change(n) {
//     n = n + 100;
//     console.log(n);
// }

// change(n);
// console.log((n));

// const obj = {
//     a:10,
//     b:20
// }

// // pass by refernce
// function changeMe (obj) {
//     obj.a = obj.a + 100;
//     obj.b = obj.b + 100;
//     console.log(obj);

// }

// changeMe(obj);
// console.log(obj);

// Abstraction

// const Rectangle = function (width, height) {
//   this.width = width;
//   this.height = height;

//   let position = {
//     x: 56,
//     y: -100,
//   };

//   let printProperties = function () {
//     console.log(`my width is ${width} and my height is ${height}`);
//   };

//   this.draw = function () {
//     console.log("i am a rectangle");
//     printProperties();
//     console.log(`x: ${position.x} & y: ${position.y}`);
//   };

//   Object.defineProperty(this, 'position', {
//     get: function () {
//         return position;
//     },
//     set: function (value) {
//         position = value;
//     }
//   })
// };

// const rect4 = new Rectangle(45, 30);
// rect4.draw();
// rect4.position = {
//     x: 38,
//     y: 67,
// }
// console.log(rect4.position);
