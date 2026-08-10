"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log("I can drive");

// const interface = 'audio';

// functions
// function logger () {
//     console.log('My name is Imran');

// }

// logger(); //calling, running, invoking function

// function fruitProcessor (apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);
// console.log(fruitProcessor(5,0));

// const appleOrangeJuice = fruitProcessor(2,4);
// console.log(appleOrangeJuice);

// function declaritons
// const age1 = calcAge1(2004);
// console.log(age1);

// function calcAge1 (birthYear) {
//     return 2026 - birthYear;
// }

// // function expression

// const calAge2 = function (birthYear) {
//     return 2026 - birthYear;
// }

// const age2 = calAge2(2006);
// console.log(age2);

//arrow function

// const calcAge3 = birthYear => 2026 - birthYear;
// const age3 = calcAge3(2004);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2026 - birthYear;
//     const retirment = 65 - age;
//     // return retirment;
//     return `${firstName} retires in ${retirment} years`;
// }

// console.log (yearsUntilRetirement(2004, 'Imran'));

//callback function
// function cutFruitPieces (fruit) {
//     return fruit * 4;
// }

// function fruitProcessor (apples, oranges) {
//    const applePieces = cutFruitPieces(apples);
//    const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log (fruitProcessor(2,3));

//review
// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2026 - birthYear;
//     const retirment = 65 - age;
//     // return retirment;
//     return `${firstName} retires in ${retirment} years`;
// }

// console.log (yearsUntilRetirement(2004, 'Imran'));
// const calcAge = function (birthYear) {
//      return 2026 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//     const age = calcAge (birthYear);
//     const retirment = 65 -age;

//     if(retirment > 0) {
//     return `${firstName} retires in ${retirment} years.`;
//     } else {
//         return `${firstName} has already retired.`;
//     }
// }

// console.log (yearsUntilRetirement(2004, 'Imran'));
// console.log (yearsUntilRetirement(1960, 'Roni'));

//challenge
// const calcAverage = (score1, score2, score3) => score1+score2+score3 / 3;
// console.log(calcAverage(44,23,71));

// const dolphinAvg = function (score1, score2, score3) {
//     return score1 + score2 + score3 / 3;
// }
// const koalasAvg = function (score4, score5, score6) {
//     return score4 + score5 + score6 / 3;
// }

// console.log(dolphinAvg(85,54,41),koalasAvg(23,34,27));

// const checkWinner = function (score1, score2, score3,score4, score5, score6) {
//    const dolphinAvg1 = dolphinAvg(score1, score2, score3);
//    const koalaAvg1 = koalasAvg(score4, score5, score6);

//    if (dolphinAvg1 >= 2* koalaAvg1) {
//     console.log (`dolphins wins (${dolphinAvg1.toFixed(2)}-${koalaAvg1.toFixed(2)})`);
//    } else if (koalaAvg1 >= 2*dolphinAvg1) {
//      console.log (`koala's wins ($${koalaAvg1.toFixed(2)}-{dolphinAvg1.toFixed(2)})`);
//    } else {
//     console.log("Nobody wins !")
//    }
// }

// console.log(checkWinner(85,54,41,23,34,27));

//Arrays
// const friends = ['imran','sahil','jakir'];
// console.log(friends);

// console.log(friends[0]);
// console.log(friends.length);

// console.log(friends[friends.length-1]);

// friends[0] = 'roni';
// console.log(friends);

// const nickName = 'Roni';
// const imran = ['Imran', 'Nazir', 2026-2004, nickName, friends];
// console.log(imran);

// //exercise
// const calcAge = function (birthYear) {
//     return 2026 - birthYear;
// }

// const years = [2000,2001,2003,2004,2005];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const ages = [age1,age2];
// console.log(ages);

// const friends = ['imran','sahil','jakir'];
// friends.push('Robi');
// friends.unshift('Roni');
// friends.pop();
// friends.shift();

// console.log(friends);
// console.log(friends.indexOf('sahil'));

// if(friends.includes('sahil')){
//     console.log('you have a friend named sahil');

// }

//challenge

// const calcTip = function (billValue) {
//     if (50 <= billValue <= 100) {
//         return billValue * 0.15;
//     } else {
//         return billValue * 0.20;
//     }
// }

// console.log(calcTip(100));

// const bills = [125,555,44];
// const tips = [];
// const total = [];

// for (let index = 0; index < bills.length; index++) {
//     tips[index] = calcTip(bills[index]);
//     total[index] = calcTip(bills[index]) + bills[index];
// }

// console.log(bills,tips,total);

//object

// const imran = {
//   firstName: "imran",
//   lastName: "nazir",
//   age: 2026 - 2004,
//   friends: ["sahil", "jakir"],
// };

// console.log(imran);

// console.log(imran.lastName);
// console.log(imran["lastName"]);

// const nameKey = "Name";
// console.log(imran["first" + nameKey]);
// console.log(imran["last" + nameKey]);

// const interestedIn = prompt(
//   "what do you want to know about imran ? chhose bettwen firstName,lastName,age,friends",
// );

// console.log(interestedIn);

// if (interestedIn) {
//   console.log(imran[interestedIn]);
// } else {
//     console.log('wrong request');
// }

// imran.location = 'India';
// imran['job'] = 'student';

// console.log(`${imran.firstName} has ${imran.friends.length}, and his best friend is ${imran.friends[0]}`);

// const imran = {
//   firstName: "imran",
//   lastName: "nazir",
//   birthYear: 2004,
//   friends: ["sahil", "jakir"],

//     calcAge: function (birthYear) {
//       return 2026 - birthYear;
//     },

//     calcAge: function () {
//       console.log(this);
//       return 2026 - this.birthYear;
//     },

//   calcAge: function () {
//     this.age = 2026 - this.birthYear;
//     return this.age;
//   },

//   challenge: function () {
//     this.job = 'student';
//     this.hasLicence = true;

//     if(this.hasLicence) {
//         console.log(`${this.firstName} is a ${this.calcAge()} years old ${this.job} and has a driver licence.`);
//     } else {
//         console.log(`${this.firstName} is a ${this.calcAge()} years old ${this.job} and has no driver licence.`);
//     }

//   }
// };

// console.log(imran.calcAge(imran.birthYear));
// console.log(imran["calcAge"](imran.birthYear));

// console.log(imran.calcAge());

// console.log(imran.calcAge());
// console.log(imran.age);
// console.log(imran.age);

//challenge
// console.log(imran.challenge());

//challenge 3

// const mark = {
//     Fullname: 'Mark Miller',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.BMI = this.mass / Math.pow(this.height,2);
//         return this.BMI;
//     }
// }

// const jhon = {
//     Fullname: 'Jhon Smith',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.BMI = this.mass / Math.pow(this.height,2);
//         return this.BMI;
//     }
// }

// if(mark.calcBMI() > jhon.calcBMI()){
//     console.log(`${mark.Fullname}'s BMI(${mark.calcBMI().toFixed(2)}) is higher than ${jhon.Fullname}'s (${jhon.calcBMI().toFixed(2)})`);
// } else {
//     console.log(`${jhon.Fullname}'s BMI(${jhon.calcBMI().toFixed(2)}) is higher than ${mark.Fullname}'s (${mark.calcBMI().toFixed(2)})`);
// }

//challenge 4

// const bills = [22, 295, 440, 37, 105, 10, 1100, 86, 52];

// const calcTip = function (bills) {
//   const tips = [];
//   const totals = [];
//   for (let index = 0; index < bills.length; index++) {
//     let tip = 0;
//     if (bills[index] >= 50 && bills[index] <= 300) {
//       tip = bills[index] * 0.15;
//     } else {
//       tip = bills[index] * 0.2;
//     }

//     tips[index] = tip;
//     totals[index] = tip + bills[index];
//   }
//   return {tips, totals};
// };

// console.log(calcTip(bills));

//debugging
// const measureKelvin = function() {
//   const measurment = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('degree celsius'))
//   }

//   console.log(measurment);
//   console.table(measurment);

//   // console.log(measurment.value);
//   const kelvin = measurment.value + 273;
//   return kelvin;
// }

// console.log(measureKelvin());
