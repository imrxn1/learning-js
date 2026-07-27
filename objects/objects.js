const original = { name: "Alice" };
const copy = original;
copy.name = "Bob";

console.log(original.name);  // "Bob" — Wait, what?!

//
function rename (person) {
    person.name = "Roni";
}

const user = { name: "Imran"};
rename(user);

console.log(user.name);

function replace(person) {
  person = { name: "Charlie" };  // Creates NEW local reference
}

const user1 = { name: "Alice" };
replace(user1);

console.log(user1.name);  // "Alice" — unchanged!

let obj1 = {name: "Imran"};
let obj2 = {name: "Imran"};
console.log(obj1 === obj2);

let obj3 = obj1;
console.log(obj1 === obj3);

const user5 = Object.freeze({ name: "Alice", age: 25 });

user5.name = "Bob";      // Silently fails (or throws in strict mode)
user5.email = "a@b.com"; // Can't add properties
delete user5.age;        // Can't delete properties

console.log(user5);      // { name: "Alice", age: 25 } — unchanged!