// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
console.log('hello');


//          SETTING UP PRETTIER AND VScode 

const x = 23;
if (x === 23) console.log(23);
const calcAge = birthYear => 2037 - birthYear;

//          INSTALLING NODE.JS AND SETTING UP A DEV ENVIRONMENT

console.log(calcAge(1991));
*/

//          USING GOOGLE, STACKOVERFLOW, AND MDN WEB DOCS

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];


//   1) Understanding the problem!
//  -What is temp amplitude? : dif between highest and lowest temps
//  -How to compute max and min temp?
//  -What is a sensor error, what do i do when that occurs?
//  2)  Break problem into sub problems!
//  -How to ignore errors?
//  -Find max and min value in array
//  -Subtract min from max (amplitude) and return it!

const calcTempAmp = (temps) => {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    console.log(max, min)
    }
    return max - min
}
const amplitude = calcTempAmp(temperatures); //runs through whole array til max is found
console.log(amplitude);

