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
Mark and John are trying to compare their bmi (Body Mass Index), which is calculated using the formula: bmi = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their bmis
3. Create a boolean variable containing information about whether Mark has a higher bmi than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's bmi higher than John's? true"). 

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
// bmiMark = massMark / squareRootHeightMark;

// squareRootHeightJohn = heightJohn *= 2;
// bmiJohn = massJohn / squareRootHeightJohn;

// // 3
// var isMarkbmiHigher = bmiMark > bmiJohn;

// //4 
// console.log('Is Mark\'s bmi higher than John\'s? ' + isMarkbmiHigher, 'Mark: ' + bmiMark, 'John: ' + bmiJohn);



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
// bmiMark = massMark / squareRootHeightMark;

// squareRootHeightJohn = heightJohn *= 2;
// bmiJohn = massJohn / squareRootHeightJohn;

// if(bmiMark > bmiJohn) {
//     console.log('Mark has a higher bmi');
// } else {
//     console.log('John has a higher bmi');
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

// var johnTeam, mikeTeam, maryTeam;

// johnTeam = (89 + 120 + 103) / 3; // 104
// mikeTeam = (116 + 94 + 123) / 3; // 111
// maryTeam = (97 + 134 + 105) / 3; // 112

// // 2 & 3

// switch (true) {
//     case johnTeam > mikeTeam:
//         console.log('John\'s team wins with an average of ' + johnTeam);
//         break;
//     case mikeTeam > johnTeam:
//         console.log('Mike\'s team wins with an average of ' + mikeTeam);
//         break;
//     case mikeTeam === johnTeam:
//         console.log('Mike\'s and John\'s teams have the same average of ' + mikeTeam);
//         break;
//     default:
//         console.log('We cannot calculate Mike\'s and John\'s teams average');
//         break;
// }

// // 4

// johnTeam = (97 + 134 + 105) / 3; // 104
// mikeTeam = (97 + 134 + 105) / 3; // 111
// maryTeam = (97 + 134 + 105) / 3; // 112

// switch (true) {
//     case johnTeam > mikeTeam && johnTeam > maryTeam:
//         console.log('John\'s team wins with an average of ' + johnTeam);
//         break;
//     case mikeTeam > johnTeam && mikeTeam > maryTeam:
//         console.log('Mike\'s team wins with an average of ' + mikeTeam);
//         break;
//     case maryTeam > johnTeam && maryTeam > mikeTeam:
//         console.log('Mary\'s team wins with an average of ' + maryTeam);
//         break;
//     case mikeTeam === johnTeam && mikeTeam === maryTeam:
//         console.log('Mike\'s, John\'s and Mary\'s teams have all the same average of ' + johnTeam);
//         break;
//     default:
//         console.log('We cannot calculate Mike\'s, John\'s and Mary\'s teams average');
//         break;
// }

// console.log(maryTeam,johnTeam,mikeTeam);



/*****************************
* Functions
*/

// function calculateAge(birthYear) {
//     return 2019 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1946);
// var ageJane = calculateAge(1989);
// console.log(ageJohn,ageMike,ageJane);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;

//     if (retirement < 0) {
//         console.log(firstName + ' is already retired.')
//     } else {
//         console.log(firstName + ' retires in ' + retirement + ' years.');
//     }
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1946, 'Mike');
// yearsUntilRetirement(1989, 'Jane');



/*****************************
* Function Statements and Expressions
*/

// Function Declaration
// function whatDoYouDo(firstName, job) {}

// Function Expression
// var whatDoYouDo = function(firstName, job) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.'
//         case 'driver':
//             return firstName + ' drives a Uber.'
//         case 'designer':
//             return firstName + ' designs websites.'
//         default:
//             return firstName + ' does something else.'
//     }
// }

// console.log(whatDoYouDo('John', 'teacher'));
// console.log(whatDoYouDo('Jane', 'designer'));
// console.log(whatDoYouDo('Mike', 'retired'));



/*****************************
* Arrays
*/

// // Initialize new array
// var names = ['John', 'Mike', 'Jane'];
// var years = new Array(1990, 1974, 1996);

// console.log(names[2]);
// console.log(names);
// console.log(names.length);

// // Mutate array data
// names[1] = 'Mary';
// names[names.length] = 'Mike';
// console.log(names);

// // Different data types
// var john = ['John', 'Smith', 1989, 'doctor', false];

// // Add array data
// john.push('blue');
// john.unshift('Mr.');

// // Remove array data
// john.pop();
// john.shift();

// // Find index number of array data
// console.log(john.indexOf('Smith'));

// // Use 'indexOf' array method to check existence of specific data inside the array
// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);



/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and ate at 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

// My solution

// var bills = [];
// var totals = [];

// var rest1 = 124;
// var rest2 = 48;
// var rest3 = 268;

// bills.push(rest1);
// bills.push(rest2);
// bills.push(rest3);

// function tipCalculator(bill) {
//     if (bill < 50) {
//         total = bill + bill * 0.2;
//     } else if (bill >= 50 && bill <= 200) {
//         total = bill + bill * 0.15;
//     } else {
//         total = bill + bill * 0.1;
//     }

//     totals.push(total);
// }

// tipCalculator(bills[0]);
// tipCalculator(bills[1]);
// tipCalculator(bills[2]);

// console.log(bills,totals);

// Solution in tutorial

/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

console.log(tips, finalValues);
*/



/*****************************
* Objects and properties
*/

// // Object literal
// var john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// // New Object syntax
// var mike = new Object();

// // Add value to Object
// mike.name = 'Mike';
// mike.birthYear = 1983;
// mike['lastName'] = 'Dunne';

// // Delete value of Object
// // delete mike.lastName;
// delete mike['Dunne'];
// // delete mike['lastName'];

// console.log(mike);

// // Read object
// console.log(john,mike);

// // Read value of key
// console.log(john.firstName);
// console.log(john['birthYear']);
// var x = 'birthYear';
// console.log(john[x]);

// // Mutate array data
// john.job = 'designer';
// john['isMarried'] = false;
// console.log(john);



/*****************************
* Objects and methods
*/

// var john = {
//     firstName: 'John',
//     lastName: 'Doe',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2019 - this.birthYear;
//     }
// };

// john.calcAge();
// console.log(john.age);



/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their bmis. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the bmi. Save the bmi to the object and also return it from the method.
3. In the end, log to the console who has the highest bmi, together with the full name and the respective bmi. Don't forget they might have the same bmi.

Remember: bmi = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// // 1 + 2
// var john = {
//     fullName: 'John Doe',
//     mass: 110,
//     height: 1.94,
//     calcbmi: function() {
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
//     }
// };

// var mike = new Object();
// mike.fullName = 'Mike Dunne';
// mike.mass = 92;
// mike.height = 1.86;
// mike.calcbmi = function() {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
// };

// // 3
// if (john.calcbmi() > mike.calcbmi()) {
//     console.log(john.fullName + ' has a bigger bmi with a value of ' + john.bmi);
// } else if (ohn.calcbmi() < mike.calcbmi()) {
//     console.log(mike.fullName + ' has a bigger bmi with a value of ' + mike.bmi);
// } else {
//     console.log(john.fullName + ' and ' + mike.fullName + ' have the same bmi.');
// }



/*****************************
* Loops and Iteration
*/

// For loop
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// var john = ['John', 'Doe', 1990, 'designer', false];

// for (var i = 0; i < john.length; i++) {
//     console.log(john[i]);
// }

// // While loop
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

// continue and break statements

// var john = ['John', 'Doe', 1990, 'designer', false];

// // continue
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') continue;
//     console.log(john[i]);
// }

// // break
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') break;
//     console.log(john[i]);
// }

// Looping backwards
// for (var i = john.length -1 ; i >= 0; i--) {
//     console.log(john[i]);
// }



/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

// 1 + 2 + 3 + 4

var johnRestaurants = {
    fullName: 'John Doe',
    bills: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tips= [];
        this.totalAmounts = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            var percentage;
            var bill = this.bills[i];
            // Determine percentage based on tipping rules
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            // Add results to the corresponding percentage
            this.tips[i] = bill * percentage;
            this.totalAmounts[i] = bill + bill + percentage;
        }
    }
}

// 5

var markRestaurants = {
    fullName: 'Mark Smith',
    bills: [77, 375, 110, 45],
    tips: [],
    totalAmounts: [],
    calcTip: function() {
        this.tips = [];
        this.finalValues = [];
                
        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];
            
            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            
            // Add results to the corresponing arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}

// 6

function calcAverage(e) {
    var sum = 0;
    for (var i = 0; i < e.tips.length; i++) {
        sum += e.tips[i];
    }
    var average = sum / e.tips.length;
    e.average = average;
}

// Do the calculations
// Call the object's methods
johnRestaurants.calcTip();
markRestaurants.calcTip();

// Calculate and add the average
calcAverage(johnRestaurants);
calcAverage(markRestaurants);

// Print which family paid more on average
var whoPaidMore = function() {
    if (johnRestaurants.average > markRestaurants.average) {
        console.log(johnRestaurants.fullName + '\'s family paid the highest tips on average with an average of $' + johnRestaurants.average);
    } else {
        console.log(markRestaurants.fullName + '\'s family paid the highest tips on average with an average of $' + markRestaurants.average);
    }
}

whoPaidMore();