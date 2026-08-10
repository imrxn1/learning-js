// challenge 1

// //test data 1
//  const mass1 = 78;
//  const height1 = 1.69;

//  const mass2 = 92;
//  const height2 = 1.95;

// let bmi1 = mass1 / Math.pow (height1,2);
// let bmi2 = mass2 / Math.pow(height2, 2);

// let markHigherBMI = bmi1 > bmi2;
// console.log(bmi1,bmi2,markHigherBMI);

// //test data 2
//  const mass3 = 95;
//  const height3 = 1.88;

//  const mass4 = 85;
//  const height4 = 1.76;

// let bmi3 = mass3 / Math.pow (height3,2);
// let bmi4 = mass4 / Math.pow(height4, 2);

// markHigherBMI = bmi3 > bmi4;
// console.log(bmi3,bmi4,markHigherBMI);/

//challenge 2

//  const mass1 = 78;
//  const height1 = 1.69;

//  const mass2 = 92;
//  const height2 = 1.95;

// let bmi1 = mass1 / Math.pow (height1,2);
// let bmi2 = mass2 / Math.pow(height2, 2);

// if (bmi1 > bmi2) {
//     console.log(`Mark's BMI (${bmi1.toFixed(2)}) is higher than Jhon's BMI (${bmi2.toFixed(2)}) `);
// } else {
//     console.log(`Jhon's BMI (${bmi2.toFixed(2)}) is higher than Mark's BMI (${bmi1.toFixed(2)}) `);
// }

// logical operators
// const hasDriverLicense = true;
// const hasGoodVision = true;

// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// const shouldDRive = hasDriverLicense && hasGoodVision;

// if(shouldDRive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive')
// }

// const isTired = true;
// console.log(hasDriverLicense || hasGoodVision || isTired);

// if(hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive')
// }

//challenge 3
// const dolphinScore1 = 96;
// const dolphinScore2 = 108;
// const dolphinScore3 = 89;

// let dolphinAvg = dolphinScore1 + dolphinScore2 + dolphinScore3 / 3;

// const koalaScore1 = 88;
// const koalaScore2 = 91;
// const koalaScore3 = 110;

// let koalaAvg = koalaScore1 + koalaScore2 + koalaScore3 / 3;

// if(dolphinAvg > koalaAvg) {
//     console.log(`dolphin's wins`);
// } else if (koalaAvg > dolphinAvg) {
//     console.log(`koala wins`);
// } else {
//     console.log(`it's a draw`);
// }

// if(dolphinAvg > koalaAvg && dolphinAvg >= 100) {
//     console.log(`dolphin's wins`);
// } else if (koalaAvg > dolphinAvg && koalaAvg >= 100) {
//     console.log(`koala wins`);
// } else if (koalaAvg === dolphinAvg && koalaAvg >= 100 && dolphinAvg >=100) {
//     console.log(`it's a draw`);
// }
