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