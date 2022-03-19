"use strict";
/*

//          DEVELOPER SKILLS & EDITOR SETUP
//      Coding challenge #1

Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures:

Ex: [17, 21, 23] will print "...17C in 1 days... 21C in 2 days... 23C in 3 days..."


// function 'printForecast' which takes an 'arr' and logs a string like the above^ to console.
// 1) the function takes in an array and logs a string 
// 2) console log the function to string the above description
// 3) x days? : index + 1

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];
console.log(temps1, temps2)


// const printForecast = (arr) => {
//     return `...${temps1[0]}C in 1 days... ${temps1[1]}C in 2 days... ${temps1[2]}C in 3 days...`
// }
// console.log(printForecast())

const printForecast = (arr) => {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += `${arr[i]}C in ${i + 1} days ...`;
    }
    console.log('...' + str)
}
printForecast(temps2);
*/