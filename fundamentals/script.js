//Array
// const arr = [1,2,3,4,5,6];

// //array traversing
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// //Insert and remove element
// arr.push(9); //add element to last
// arr.unshift(9); //add element to first

// arr.splice(3,0,9,10); //add element at specif place

// arr.pop() //remove last element
// arr.shift() //remove first element

// arr.splice(3, 1);  //remove elemnt at a specific place
// arr.splice(3, 1, 44); //updateing element
// console.log(arr);

// Search Data

// const arr = [1,2,7,93,43,81,0,43];

// const find = 10;
// let isFound = false;

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] === find) {
//         console.log(`data find at index ${index}`);
//         isFound = true;
//         break;
//     }
// }

// /* outside not if-else in for loop cause it will print
//  everytime for loop runs */

// if(!isFound) {
//     console.log('data not found');

// }

// multi dimensional array

// const arr = [
//   [78, 90, 87, 67],
//   [90, 98, 76, 78],
//   [94, 87, 69, 83],
// ];

// // console.log(arr[0][0]);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// reverse an array

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for (let i = 0; i < ( arr.length / 2); i++) {
//   // we are swaping till middle [1,2,3,4,5] = [5,4,3,2,1]
//   //at middle element 3 we stop swaping

//   let temp = arr[i];
//   arr[i] = arr[arr.length-1 -i]; //-i cause we want to go from last element to second last element 
//   arr[arr.length -1 -i] = temp;
// }

// console.log(arr);

// console.log(arr.reverse());

//methods

// const arr = [1,2,3];

// // output: 1,2,3 string
// console.log(arr.join( )); 

// //every element fill 
// // arr.fill(0); 

// // add two array
// const arr2 = [5,6,7];
// const arr3 = arr.concat(arr2) 
// console.log(arr3);

// // two check if array or not
// console.log(Array.isArray(arr)); 

// // make array from a array ( CLONE )
// const arr4 = Array.from(arr); 

// console.log(arr4);

// // why const arr4 = arr ??
// const arr5 = arr;
// arr5[0] = 99;
// console.log(arr[0]); //99 arr is changed, mutable 


