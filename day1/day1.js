// console.log can print something on console

// console.log("hello world");

// "use strict";

// let firstName = "Imran";
// console.log(firstName);

// firstName = "roni";
// console.log(firstName);

// Naming of variables Rules

// console.log(firstName[3]);
// console.log(firstName.length);

//last index = length -1

// let length = firstName.length;
// console.log(firstName[length-1]);

// console.log(firstName.length);
// firstName= firstName.trim();
// console.log(firstName.length);

// firstName = firstName.toUpperCase();
// console.log(firstName);

// firstName = firstName.slice(0,3);
// console.log(firstName);

// primitive data types
// string, number, booleans, BigInt, symbol, null, undefined

// let age = 22;
// let name =  "imran";

// console.log(typeof age);
// console.log(typeof "nazir");

//convert number to string

// let age = 22;
// age = String(age);
// console.log(typeof age);

// let age = 22;
// age = age + "";
// console.log(typeof age);

//convert string to number

// age = Number("34");
// console.log(typeof age);

//template letral
// let name = "imran";
// let age = 22;
// let aboutMe = `my name is ${name} and my age is ${age}`;
// console.log(aboutMe);

//undefined

// let name;
// console.log(name);

//null
// let variable = null;
// console.log(variable);
// console.log(typeof variable);
// variable = 22;
// console.log(typeof variable, variable);

//BigInt
// console.log (Number.MAX_SAFE_INTEGER);
// let myNumber = BigInt(832788483648667816376764376);
// console.log(myNumber);
// let num2 = 23n;
// console.log(typeof num2);
// console.log(myNumber + num2);

// let num1 = "8";
// let num2 = 7;

// console.log(num1 !== num2);


// let age = 19;

// if (age >= 18){
//     console.log ("you can drive");
// } else {
//     console.log ("you can not drive");
// }

// let num = 21;
// if (num % 2 === 0){
//     console.log("even number");
// } else {
//     console.log ("odd number");
// }


// falsy value false, 0, "", null, undefined
// let firstName ;

// if(firstName){
//     console.log(firstName);
// } else{
//     console.log("firstname is kinda empty");
// }

// tenery operator

// let age = 4;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);

// nested if-else

// let winningNumber = 19;
// let userGuess = Number(prompt("Guess the number"));

// if (userGuess === winningNumber) {
//     console.log ("Your guess is right");
// } else {
//     if (userGuess < winningNumber) {
//         console.log ("guess is too low");
//     } else {
//         console.log ("guess is too high");
//     } 
// }

// if else-if

// switch statement

// let day = 7;

// switch(day) {
//     case 0 : 
//     console .log ("Sunday");
//     break;
//     case 1 : 
//     console .log ("Monday");
//     break;
//     case 2 : 
//     console .log ("Tuesday");
//     break;
//     case 3 : 
//     console .log ("Wednesday");
//     break;
//     case 4 : 
//     console .log ("Thrusday");
//     break;
//     case 5 : 
//     console .log ("Friday");
//     break;
//     case 6 : 
//     console .log ("Saturday");
//     break;
//     default : 
//     console .log ("Invalid day");
// }

//while loop
// let i = 0;
// while (i <= 9) {
//     console.log (i);
//     i ++;
// }

//for loop

for(let i = 0; i <= 9; i++){
    console.log (i);
}