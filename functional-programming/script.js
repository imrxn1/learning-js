// functional programming

//pure function
// It Returns the same result if given the same arguments
// It does not cause any observable side effects

// function sqr(n) {
//   return n * n;
// }

// console.log(sqr(2));
// console.log(sqr(2));
// console.log(sqr(2));

// // not pure function
// let n = 10;
// function change() {
//   n = 100;
// }

// change(n);
// console.log(n);

// const point = {
//   x: 43,
//   y: 56,
// };

// function printPoint(point) {
//   ((point.x = 100), (point.y = 100));

//   console.log(point); // same result for same arg, but changes the outside obj
// }

// printPoint(point);
// console.log(point);

// 2. first class function

// function add(a, b) {
//   return a + b;
// }
// // A Function can be Stored in a Variable
// const sum = add;
// console.log(sum(4, 5));
// console.log(typeof sum);

// // A Function can be Stored in an Array
// const arr = [];
// arr.push(add);
// console.log(arr);
// console.log(arr[0](4, 5));

// // A Function can be Stored in an Object
// const obj = {
//   sum: add,
// };
// console.log(obj);
// console.log(obj.sum(7, 9));

// // We can Create Function as Need
// setTimeout(function () {
//   console.log("i have created");
// }, 5000);

/*
We can Pass Function as an Arguments
We can return Functions from Another Function */

// function add (a,b) {
//     return a+b;
// }

// function maipulate (a,b, func) {
//     const c = a + b;
//     const d = a -b;

//     return function() {
//         const m = func(a,b);
//         return c*d*m;
//     }
// }

// const multiply = maipulate(3,4,add);
// console.log(multiply());

// first look at Closure

// const c = 10;

// function a() {
//   const b = 25;

//   return function () {
//     console.log(b);
//   };
// }

// const ab = a();
// console.dir(ab); // Closure (a) {b: 25}

// callback function
// function sample(a,b, cb) {
//     const c = a + b;
//     const d = a - b;
//     const result = cb(c,d);
//     return result;
// }

// const result = sample(5,8, function(c,d) {
//     return c -d;
// })

// console.log(result);

// const result2 = sample(5,8, function(c,d) {
//     return c *d;
// })

// console.log((result2));

// forEach
// const arr = [1,2,3,4,5]

// let sum = 0;
// arr.forEach(function(value,index,arr){
//     console.log(value, index, arr);
//     sum += value;
// })
// console.log(sum);

// function forEach (arr, cb) {
//     for(let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }

// let sum = 0;
// forEach(arr,function(value,index,arr) {
//     console.log(value, index, arr);
//     sum += value;
// })

// console.log(sum);

// map

// const arr = [1, 2, 3];

// const newArr = arr.map(function(value,index,arr) {
//     return value*value;
// })

// console.log(newArr);

// function myMap(arr,cb) {
//   const newArrr = [];
//   for (let i = 0; i < arr.length; i++) {
//     /* const temp = arr[i] * arr[i];
//     except this everything is same for differnt operation
//     we need to change this, for every differnt types of operation.
//     so we are calling a callback function */
//     const temp = cb (arr[i], i, arr);
//     newArrr.push(temp);
//   }
//   return newArrr;
// }

// // console.log(myMap(arr));

// const qb = myMap(arr, function(value){
//     return value*value;
// })

// const x3 = myMap(arr, function(value){
//     return value*3;
// })

// console.log(qb);
// console.log(x3);

// filter
// const arr = [6, 8, 9, 3, 5, 0, 1];

// const filteredArray = arr.filter(function (value) {
//   return value % 2 === 0;
// });

// console.log(filteredArray);

// implementaion
// function filteredArray1(arr, cb) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       newArr.push(arr[i]);
//     }
//     // if(arr[i] % 2 === 0) {
//     //   newArr.push(arr[i]);
//     // }
//   }
//   return newArr;
// }

// // console.log(filteredArray(arr));

// const even = filteredArray1(arr, function (value) {
//   if (value % 2 === 0) {
//     return true;
//   }
//   return false;
// });

// console.log(even);

// const greterThan5 = filteredArray1(arr, function(value) {
//   if(value > 5) {
//     return true;
//   }
//   return false;
// });

// console.log(greterThan5);

// reduce
// const arr = [1,2,3,4,5];

// const sum = arr.reduce(function(prev, curr){
//   return prev + curr;
// })

// console.log(sum);

// function myReduce(arr, cb, acc) {
//   for(let i = 0; i < arr.length; i++){
//     acc = cb(acc,arr[i]);
//   }
//   return acc;
// }

// const sum1 = myReduce(arr, function(prev, curr){
//   return prev + curr
// },0);

// console.log(sum1);

//  find and findindex

// const arr = [1,2,3,4,5,6,7,9];

// const result = arr.find(function(value,index){
//     return value === 9;
// })

// console.log(result);

// function myFind (arr, cb) {
//     for(let i =0; i < arr.length; i++ ) {
//         if (cb(arr[i])) {
//            // return arr[i];
//             return i;
//         }
//     }
// }

// const result1 = myFind(arr, function (value) {
//     return value === 9 ;
// })

// console.log(result1);

// const result2 = arr.findIndex(function(value,index){
//     return value ===9;
// })

// console.log(result2);

// sort

// const arr = [2, 8, 7, 0, 3, 5, 11, 56, 35];

// arr.sort(function (a, b) {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// console.log(arr);

// // every
// const res = arr.every(function (value) {
//   return value % 2 === 0;
// });
// console.log(res);

// //some
// const res1 = arr.some ( function (value){
//     return value < 0;
// })

// console.log(res1);

// return function

// function base(b) {
//     return function(n) {
//         let result = 1;
//         for (let i = 0; i < b; i++) {
//             result *= n;
//         }
//         return result;
//     }
// }

// const base10 = base(10);
// console.log(base10(2));

// recursive function

// function sayHi(n) {
//     if (n === 0) {
//         return
//     }
//     console.log('hello, i am calling');
//     sayHi(n - 1);
// }

// sayHi(10);

// // example sum 1 to 100

// function sum (n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n + sum(n-1);
// }

// console.log(sum(2));
// console.log(sum(100));

// //factorial

// function factorial (n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorial(n-1);
// }

// console.log(factorial(5));

// const arr = [1,2,3,4,5];
// function sumOfArray (arr, lastIndex) {
//     if (lastIndex < 0) {
//         return 0;
//     }
//     return arr[lastIndex] + sumOfArray(arr, lastIndex -1);
// }

// console.log(sumOfArray(arr, arr.length - 1));

// currying
// function add (a,b,c) {
//     return a + b + c;
// }

// // add(41,23,90);
// function currying (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const result = currying(5)(5)(5);
// console.log(result);

// composition
// second fun input first fun output
// function print(inp) {
//   console.log(inp);
// }

// function multiplyByFive(n) {
//   return n * 5;
// }

// function add(a, b) {
//   return a + b;
// }

// print(multiplyByFive(add(3,5)));

// hoisting

// const a = 100;
// // newPrint(a);

// print(10);

// const newPrint = print;
// newPrint(45);

// function print(a) {
//     console.log((a));

// }

// print(a);

// cretional phase
// a = undefined
// newPrint = undefined
// print = ref

// executional phase
// a = 100
// error - newPrint(a);
// newPrint = ref
// no error

// Closure
/* Closure is when a function is able to remember and access it's lexical scope
even when that function executing outside it's lexical scope */

// function test() {
//     const msg = 'i am learning lexical scope and closure';

//     function sayMsg() {
//         console.log(msg);

//     }
//     sayMsg();
// }

// test();

// function test() {
//     const msg = 'i am learning lexical scope and closure';

//     return function() {
//         console.log(msg);

//     }

// }

// const sayMsg = test();
// sayMsg();
