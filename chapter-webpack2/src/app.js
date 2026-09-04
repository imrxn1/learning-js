// iterator
// const arr = [1,2,3];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// function createIterator(collection) {
//     let i = 0;
//     return {
//         next() {
//             return {
//                 done: i >= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let itrate = createIterator(arr);

// let itrate = arr[Symbol.iterator]();
// console.log(itrate.next());
// console.log(itrate.next());
// console.log(itrate.next());
// console.log(itrate.next());


// let str = 'text';
// let itrate1  = str[Symbol.iterator]();
// console.log(itrate1.next());
// console.log(itrate1.next());
// console.log(itrate1.next());
// console.log(itrate1.next());
// console.log(itrate1.next());

// for of loop

// const arr = [1,2,3];

// for(let v of arr) {
//     console.log(v); 
// }

//generator
// const arr = [1,2,3];
// function* generate(collection) {
//     for(let i = 0; i < collection.length; i++) {
//         yield collection[i]
//     }
// }

// let it = generate(arr)
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

