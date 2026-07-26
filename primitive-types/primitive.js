// 1. immutable
let name = "Imran";
name.toUpperCase();
console.log(name);

//2.Compared By Value
let a = 12;
let b = 12;
console.log(a === b); // true-same value

let obj1 = {
    num : 12
}

let obj2 = {
    num : 12
} 
console.log(obj1 === obj2) //false-diifernt objects

//string
let name1 = "Imran";
let age = 22;

// String interpolation - embed expressions
let greeting = `Hello, ${name1}! You are ${age} years old.`;
console.log(greeting);        // "Hello, Imran! You are 22 years old."
console.log(typeof greeting); // "string" — it's just a string!

// Multi-line strings
let multiLine = `
  This is line 1
  This is line 2
`;
console.log(typeof multiLine); // "string"

// Strings Are Immutable
let str = "hello";
str[0] = "H";        // Does nothing! No error, but no change
console.log(str);    // Still "hello"

// To "change" a string, create a new one
str = "H" + str.slice(1);
console.log(str);    // "Hello"

// numbers
console.log(1 / 0);       // Infinity
console.log(-1 / 0);      // -Infinity
console.log("hello" * 2); // NaN (Not a Number)

//typeof
console.log(typeof "hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof 42n);         // "bigint"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof Symbol());    // "symbol"
console.log(typeof null);        // "object" ⚠️ (bug!)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"

//better type checking
// Check for null specifically
let value = null;
if (value === null) {
  console.log("It's null");
}

// Check for arrays
Array.isArray([1, 2, 3]);  // true
Array.isArray("hello");    // false

// Get precise type with Object.prototype.toString
Object.prototype.toString.call(null);       // "[object Null]"
Object.prototype.toString.call([]);         // "[object Array]"
Object.prototype.toString.call(new Date()); // "[object Date]"

let obj3 = { text: "hello" };
console.log(Object.prototype.toString.call(obj3));



//Nan
let value1 = NaN;
if(value === NaN){
     console.log("its Nan");
}
// no output alaways false

if (Number.isNaN(value1)){
    console.log("its Nan");
}
// its Nan output

// + Operator String Concatenation
console.log(1 + 2);
console.log("1" + "2");
console.log("1" + 2);
console.log(1 + "2");

console.log(Number("5") + Number("6"));
console.log(String(1) + String(2));

//autoboxing
let str5 = "Hello";

console.log(str5.length);
console.log(str5.toUpperCase());