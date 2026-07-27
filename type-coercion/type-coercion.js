console.log(Number (null));
console.log(Number (undefined));

console.log(Number (null+5));
console.log(Number (undefined+5));

// == algorithm

// Example 1: "5" == 5
"5" == 5;
// String vs Number → convert string to number
// 5 == 5
// Result: true

// Example 2: true == "1"
true == "1";
// Boolean involved → convert boolean to number first
// 1 == "1"
// Number vs String → convert string to number
// 1 == 1
// Result: true

// Example 3: [] == false
[] == false;
// Boolean involved → convert boolean to number first
// [] == 0
// Object vs Number → convert object to primitive
// "" == 0 (empty array → empty string)
// String vs Number → convert string to number
// 0 == 0
// Result: true

// Example 4: [] == ![]
[] == ![];
// First, evaluate ![] → false (arrays are truthy)
// [] == false
// Boolean involved → false becomes 0
// [] == 0
// Object vs Number → [] becomes ""
// "" == 0
// String vs Number → "" becomes 0
// 0 == 0
// Result: true (yes, really!)