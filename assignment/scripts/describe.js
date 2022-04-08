// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// On line 17 they are declaring a varible and naming the varible number also setting it's value equal to one.
// On line 19 they are adding one to the varible number .
// On lines 20 through 23 they are first asking if the the varible number is greater than or equal to 2. If so, line 22 should exceute. 
//On line 22 the string yes should appear in the console if the condition is true.

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// On line 36 they are declaring a varible refered to as name and setting it's value = the string Dane.
// On line 38 we are checking if the varible name is exactly equal to the string Mary
// if Line 38 is true then on line 39  console.log('Hi, Mary!') will execute.
//if line 38 is false console.log('How do you do?') will execute

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// On line 55 they are declaring a varible named secret 
//On line 57 defineing a varible naming it code and giving it a value of 123
/* On line 59 they are checking if the value of the varible code is equal to 123
/* This being the case the seceret varaible becomes equal to the string super. And the code value get multipied by 2 making it's new value 246.
//On lines 60 -61 if the varible code is greater than 250 this line of code is ignored being that it is false.
//they then console log secret which will display the string super.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/* colorOne should be equal to blue,and color 2 should be set to red
ColorOne = "blue",colorTwo = "red"
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;
colorTwo should be set to purple as well
colorTwo = "purple"
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
That is checking if the tem is greater than 39 OR the time is greater than or equal to 4.
should be if(temp > 39 && time >=4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
That is checking if the minAge is less than or equal to 21.
should be if(minAge >= 21)
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

