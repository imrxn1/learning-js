'use strict';

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