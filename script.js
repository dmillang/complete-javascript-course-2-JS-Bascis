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

// 1
var heightMark, heightJohn, massMark, massJohn

heightMark = 1.86;
massMark = 92;

heightJohn = 1.94;
massJohn = 110;

// 2
squareRootHeightMark = heightMark *= 2;
BMIMark = massMark / squareRootHeightMark;

squareRootHeightJohn = heightJohn *= 2;
BMIJohn = massJohn / squareRootHeightJohn;

// 3
var isMarkBMIHigher = BMIMark > BMIJohn;

//4 
console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher, 'Mark: ' + BMIMark, 'John: ' + BMIJohn);