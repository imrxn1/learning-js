var randomGuyd = "imran add";
let animal = "lion";

console.log(window.randomGuyd, window.animal);

//Data Types

//objects

const person = {
    name: "Imran",
    age: 18,
    country: "India"
};

console.log (person.name);
console.log (person["name"]);

person.age = 22;
console.log(person);

person.city = "Nalhati";
console.log(person);

delete person.city;
console.log(person);

//symbol

const id = Symbol();

const user = {
    name: "Imran",
    
    [id] : 123
};

console.log(user[id]);

//Symbol is used to create unique object property keys so they don't accidentally clash with normal property names.

//Big int

const b = BigInt("1883283683662362636239289383");
console.log(b);