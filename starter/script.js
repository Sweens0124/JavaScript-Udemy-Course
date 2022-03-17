/*let js = 'amazing';
console.log(40 + 8 + 23 - 10);

const firstName = 'Lucas';
const job = 'unemployed';
const birthYear = 1996;
const year = 2037

const lucas = "I'm " + firstName + ', an ' + job + (year - birthYear) + ' year old bum!';
console.log(lucas);

const lucasNew = `I'm ${firstName}, a ${year - birthYear} year old, ${job} bum`;
console.log(lucasNew);

console.log(`Just a regular string cause of back ticks :)`);*/
// COURSE 20 ***************** CONTROL STRUCTURE
/*const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}
//conversion and coercion*/
//conversion
/*const inputYear = '1991'
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(String(23), 23);
//coercion
console.log('I am ' + 23 + ' years old');

console.log('19' - ' 13' + '17');
console.log('123' > 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Truthy and Falsy values
//5 falsey values: 0, ' ', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 1;
if (money) {
    console.log(`Don't spend it all;)`);
} else {
    console.log(`You should get a job!`);
}

let height;
if (height) {
    console.log('Yay, Height is defined');
} else {
    console.log('WOW HEIGHT IS UNDEFINED :(((')
}*/

// Equality operators: === vs ===

/*const age = 18;
if (age === 18) console.log('You just became and adult!(strict)');

if (age == 18) console.log('You just became and adult!(loose)');

const favorite = Number(prompt('What is your favorite number?'));
console.log(favorite);
console.log(typeof favorite)

if (favorite === 23) {
    console.log('cool 23 is lit')
} else if (favorite === 7) {
    console.log('7 is also a lit number aha')
} else {
    console.log(' Number isnt 23 or 7')
}

if (favorite !== 23) console.log('Why not 23?');*/

// logical operators

// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense)

// const shouldDrive = hasDriversLicense && hasGoodVision

// const isTired = true;
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log(`Sarah is able to drive!`);
// } else {
//     console.log(`Someone else should drive`);
// }

/*const day = 'monday'; //change this for different results

switch (day) {
    case 'monday': //equivalent to writing day==='monday'
        console.log('I start work');
        console.log('Go to coding school');
        break;
    case ' tuesday':
        console.log('snowboard on day off');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('I write code');
        break;
    case 'friday':
        console.log(`I'm done with work!`);
        break;
    case 'saturday':
    case 'sunday':
        console.log(`Enjoy the weekend :D`);
        break;
    default:
        console.log(`Not a valid day!`);
}

if (day === 'monday') {
    console.log('I start work');
    console.log('Go to coding school');
} else if (day === 'tuesday') {
    console.log('snowboard on day off');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('I write code');
} else if (day === 'friday') {
    console.log(`I'm done with work!`);
} else if (day === 'saturday' || 'sunday'); {
    console.log(`Enjoy the weekend :D`);
}*/

// STATEMENTS AND EXPRESSIONS

//TERNARY OPERATOR basically an if else block

// const age = 25;
// age >= 18 ? console.log(`I like to drink wine`) : console.log(`I like to drink water`);
// //OPERATOR PRODUCES VALUE, WHICH IS AN EXPRESSION. TERNARY CAN DECLARE VARIABLES.

// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2            // if else block compared to ternary ^
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2)

// console.log(`i like to drink ${age >= 18 ? 'wine' : 'water'}`)
// // This is template literal ^^^

//      INTRODUCTION TO ARRAYS

const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);