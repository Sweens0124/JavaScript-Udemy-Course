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

const calcTempAmp = function (temps) {
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min
}
const amplitude = calcTempAmp(temperatures); //runs through whole array til max is found
console.log(amplitude);

//  Problem 2
//  function should now receive 2 arrays of temps
//  1) understanding
//  -with 2 arrays, do we need to implement functionality twice? NO! just merge two arrays
//  2) breaking up into sub-probs
//  - merge 2 arrays.
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

const calcTempAmpNew = function (t1, t2) {
    const temps = t1.concat(t2)
    console.log(temps);
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min
}
const amplitudeNew = calcTempAmpNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);

//          DEBUGGING WITH THE CONSOLE AND BREAKPOINTS

const measureKelvin = function() {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        // C) fix the bug
        // value: Number(prompt('Degrees Celsius:'))
        value: 10
    };
    console.log(measurement);

    console.table(measurement);
    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
}
// a) identify bug
// b) find the bug.
console.log(measureKelvin());

//  Using a debugger
const calcTempAmpBug = function (t1, t2) {
    const temps = t1.concat(t2)
    console.log(temps);
    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i]
        if (typeof curTemp !== 'number') continue;

        // debugger;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min
}
const amplitudeBug = calcTempAmpBug([3, 5, 1], [9, 4, 5]);
// a) identify the bug!
console.log(amplitudeBug);
*/