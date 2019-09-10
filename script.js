/****************************
Vairables and Data Types
*/

/*
var firstName = 'David';
console.log(firstName);

var lastName = 'Millan';
var age = 30;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Web Designer';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
//var if = 0;
*/

/****************************
Vairable mutation and type coercion
*/

/*
var firstName = 'John';
var age = 28;

// Type coercion:
// automatically changing a number data type variable into a string:
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

// Variable mutation:
// Changing the value of a variable

age = 30;
job = 'driver';

alert(firstName + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + '.');

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/****************************
Basic operators
*/

// var year, ageJohn, ageMark, yearJohn, yearMark;
// year = 2019;
// ageJohn = 28;
// ageMark = 35;

// // Math operators
// yearJohn = year - ageJohn;
// yearMark = year - ageMark;

// console.log('John was born in ' + yearJohn + ', while Mark was born in ' + yearMark + '.');

// console.log(year + 2);
// console.log(year * 2);
// console.log(year / 2);

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// //typeof operator
// console.log(typeof ageJohn);
// console.log(typeof johnOlder);
// console.log(typeof 'Hi string');
// var x;
// console.log(typeof x);

/****************************
Operator precedence
*/

// var now, ageJohn, fullAge;

// now = 2019;
// yearJohn = 1989;
// fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// // Grouping (parenthesis)
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var ageAverage = (ageJohn + ageMark) / 2;
// console.log(ageJohn);
// console.log(ageAverage);

// // Multiple assignments
// var x,y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x,y);

// // More operators
// var z = 5;
// z *= 5; // 25
// console.log('z *= 5 equals ' + z);
// z += 5;
// console.log('z += 5 equals "z = 25 + 5" which equals ' + z); // 30
// z++;
// console.log('++z equals ' + z); // 31

/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/

// // 1
// var heightMark, heightJohn, massMark, massJohn

// heightMark = 1.86;
// massMark = 92;

// heightJohn = 1.94;
// massJohn = 110;

// // 2
// squareRootHeightMark = heightMark *= 2;
// BMIMark = massMark / squareRootHeightMark;

// squareRootHeightJohn = heightJohn *= 2;
// BMIJohn = massJohn / squareRootHeightJohn;

// // 3
// var isMarkBMIHigher = BMIMark > BMIJohn;

// //4 
// console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher, 'Mark: ' + BMIMark, 'John: ' + BMIJohn);

/*****************************
* If/else Statements
*/

// var firstName = 'John';
// var civilStatus = 'single';
// var isMarried = false;

// if(civilStatus === 'married') {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is NOT married');
// }

// if(isMarried) {
//     console.log(firstName + ' is married');
// } else {
//     console.log(firstName + ' is NOT married');
// }

// var heightMark, heightJohn, massMark, massJohn

// heightMark = 1.86;
// massMark = 92;

// heightJohn = 1.94;
// massJohn = 110;

// squareRootHeightMark = heightMark *= 2;
// BMIMark = massMark / squareRootHeightMark;

// squareRootHeightJohn = heightJohn *= 2;
// BMIJohn = massJohn / squareRootHeightJohn;

// if(BMIMark > BMIJohn) {
//     console.log('Mark has a higher BMI');
// } else {
//     console.log('John has a higher BMI');
// }

/*****************************
* Boolean Logic
*/

// firstName = 'John';
// age = 27;

// if (age < 13) {
//     console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man');
// }

/*****************************
* The Ternary Operator and Switch Statements
*/

// firstName = 'John';
// age = 18;

// Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer') : console.log(firstName + ' drinks juice');

// var drink = age >= 18 ? 'beer' : 'juice'
// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch Statement

// firstName = 'John';
// age = 26;
// job = 'instructor';

// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs responsive websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
//         break;
// }

// age = 42;

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man');
//         break;
//     default:
//         console.log(firstName + ' is a man');
//         break;
// }

// if (age < 13) {
//     console.log(firstName + ' is a boy');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man');
// } else {
//     console.log(firstName + ' is a man');
// }

/*****************************
* Truthy and Falsy Values and Equality Operators
*/

// Falsy values: undefined, null, 0, '' <- empty strings, NaN
// Truthy: NOT falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('variable is defined');
// } else  {
//     console.log('variable has NOT been defined');
// }

// // Equality operators (type coercion)
// if (height == '23') {
//     console.log('The == equality operator does type coercion');
// }

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)

5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

// 1

var johnTeam, mikeTeam, maryTeam;

johnTeam = (89 + 120 + 103) / 3; // 104
mikeTeam = (116 + 94 + 123) / 3; // 111
maryTeam = (97 + 134 + 105) / 3; // 112

// 2 & 3

switch (true) {
    case johnTeam > mikeTeam:
        console.log('John\'s team wins with an average of ' + johnTeam);
        break;
    case mikeTeam > johnTeam:
        console.log('Mike\'s team wins with an average of ' + mikeTeam);
        break;
    case mikeTeam === johnTeam:
        console.log('Mike\'s and John\'s teams have the same average of ' + mikeTeam);
        break;
    default:
        console.log('We cannot calculate Mike\'s and John\'s teams average');
        break;
}

// 4

johnTeam = (97 + 134 + 105) / 3; // 104
mikeTeam = (97 + 134 + 105) / 3; // 111
maryTeam = (97 + 134 + 105) / 3; // 112

switch (true) {
    case johnTeam > mikeTeam && johnTeam > maryTeam:
        console.log('John\'s team wins with an average of ' + johnTeam);
        break;
    case mikeTeam > johnTeam && mikeTeam > maryTeam:
        console.log('Mike\'s team wins with an average of ' + mikeTeam);
        break;
    case maryTeam > johnTeam && maryTeam > mikeTeam:
        console.log('Mary\'s team wins with an average of ' + maryTeam);
        break;
    case mikeTeam === johnTeam && mikeTeam === maryTeam:
        console.log('Mike\'s, John\'s and Mary\'s teams have all the same average of ' + johnTeam);
        break;
    default:
        console.log('We cannot calculate Mike\'s, John\'s and Mary\'s teams average');
        break;
}

console.log(maryTeam,johnTeam,mikeTeam);