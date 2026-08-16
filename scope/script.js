'use strict';

function calcAge(birthYear) {
  const age = 2026 - birthYear;
  // console.log(firstName);

  function printAge() {
    const output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1997 && birthYear <= 2012) {
      const str = `you are a genz, ${firstName}`;
      console.log(str);
      var genz = true;

      function add(a,b) {
        console.log(a + b);
      }
    }
    console.log(genz);
    // add(2,3);
  }
  printAge();

  return age;
}

const firstName = "Imran";
calcAge(2004);
