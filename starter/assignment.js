/*const country = 'USA';
const continent = 'NA';
let population = 300000000;
let finlandPop = 6000000;
const language = `English`

console.log(country, continent, population);
let isIsland = true;

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof language);

population++;
console.log(population);
console.log(finlandPop >= population)*/

/*let markMass = 78;
let johnMass = 92;
let markHeight = 1.69;
let johnHeight = 1.95;
console.log(markMass / markHeight ** 2);
console.log(johnMass / johnHeight ** 2);
console.log(typeof markHigherBMI);
markMass = 95;
markHeight = 1.69;
johnHeight = 1.76;
johnMass = 85;
console.log(markMass / markHeight ** 2);
console.log(johnMass / johnHeight ** 2);
const markBMI = (markMass / markHeight ** 2)
const johnBMI = (johnMass / johnHeight ** 2)*/

// TEMPLATE LITERAL

/*const description1 = `The ${country} is in ${continent} with ${population} that speak ${language}`;

console.log(description1);

// if / else

if (population >= finlandPop) {
    console.log(`USA's population is above average`)
}*/

// CODING CHALLENGE 2 ***********

/*if (markBMI > johnBMI) {
    console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI} BMI!`)
}*/

//EQUALITY OPERATORS === VS ==

/*const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));
console.log(numNeighbors)
if (numNeighbors === 1) {
    console.log('Only 1 border!')
} else if (numNeighbors >= 1) {
    console.log('More than 1 border')
} else (numNeighbors === 0)
console.log('0 borders lol')*/

//LOGICAL OPERATORS and, or, !

// if (language === 'english' && population < 50 && !isIsland) {
//     console.log(`you should live in USA`);
// } else {
//     console.log('USA does not meet your criteria')
// }

// data 1: dophins-96, 108, 89. koalas- 88, 91, 110.
//calculate avg scores of each team, compare the avg scores to determine who won the competition.
//BONUS - include requirement for min of 100score. (a team only wins if it has higher than 100) use logical operator to test for min score as wells as multiple else-if blocks
// //BONUS 2 - teams draw when both teams have the same score AND both have score >= 100 points. otherwise nobody wins.
// const dolphAvg = ((96 + 108 + 89) / 3);
// const koAvg = ((88 + 91 + 110) / 3);
// console.log(dolphAvg, koAvg)
// if (dolphAvg > koAvg) {
//     console.log(`DOLPHINS ARE THE WINNERS`);
// } else if (koAvg > dolphAvg) {
//     console.log(`KOALAS ARE THE WINNERS!`);
// } else if (dolphAvg === koAvg) {
//     console.log(`Nobody wins the game`);
// }
// //BONUS



// // CODING CHALLENGE 4

// // test data : test for bill values 275, 40, 430

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)