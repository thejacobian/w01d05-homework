console.log('Up and running');

//I. Variables & Datatypes
// A. Q + A
// 1. How do we assign a value to a variable?
// We assign a value to a variable by referencing its name and setting it = to the value.
// let newVar = 1;
// 2. How do we change the value of a variable?
// newVar =2;
// We can change the value of a variable again by setting it's name  = to the new value.
// 3. How do we assign an existing variable to a new variable?
// We declare a new const/let/var variable with a new name and set this = to the existing variable's name.
// let newVar = oldVar;
// 4. Remind me, what are declare, assign, and define?
// Declare is simply naming the variable and indicating whether it is let, const, or var which tells the program to allocate memory for it.
// const declaredVar;
// We can Define a variable at the same time as declaring it with the =, it sets the initial value.
// const definedVar = 10;
// Assign sets the previously declared var to a value, which can happen when defining or later when re-"assigned".
// assignedVar = 5;
// Define
// 5. What is pseudocoding and why should you do it?
// Pseudocoding is writing out in words (sometimes with code snippets for shorthand), the steps you plan to code to solve a problem.
// 6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// As I recall, a good rule of thumb is about 75% or more planning and 25% writing code.

// B. Strings
// 1. Create a variable called firstVariable.
let firstVariable;
// -Assign it the value of the string "Hello World"
firstVariable = 'Hello World';
// -Change the value of this variable to some number.
firstVariable = 9;
// -Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;
// -Change the value of secondVariable to any string.
secondVariable = 'Javascript is fun!';
// -What is the value of firstVariable?
// 9
// 2. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
const myName = 'Jake';
console.log('Hello, my name is ' + myName);
// or
const printGreeting = () => {
  return 'Hello, my name is ' + myName;
};
console.log(printGreeting());

// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
console.log(true !== false);
console.log(false || false || false || false || false || false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a < b < c);
console.log(a === a !== d);
console.log(48 == '48');

// D. The farm
// 1. Declare a variable animal. Set it to be either "cow" or something else.
let animal = "cow";
// 2. Write code that will print out "mooooo" if the it is equal to cow.
if (animal === 'cow') {
  console.log('mooooo');
}
// 3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
animal = 'duck';
if (animal === 'cow') {
  console.log('mooooo');
} else {
  console.log("Hey! You're not a cow.");
}
// 4. Commit.

// E. Driver's Ed
// 1. Make a variable that will hold a person's age. Be semantic.
let age = 21;
// 2. Write code that will print out "Here are the keys", if the age is 16 years or older.
if (age >= 16) {
  console.log('Here are the keys');
}
// 3. If the age is younger than 16, a message should print "Sorry, you're too young."
age = 15;
if (age >= 16) {
  console.log('Here are the keys');
} else {
  console.log("Sorry, you're too young.");
}

// II. Loops
// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.
for (let i = 0; i < 11; i++) {
  console.log(i);
}
// Write a loop that will print out all the numbers from 10 up to and including 400.
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
// Write a loop that will print out every third number starting with 12 and going no higher than 4000.
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

// // B. Get Even
// // 1. Print out the even numbers that are within the range of 1 - 100.
for (let i = 2; i <= 100; i += 2) {
  console.log(i);
}
// 2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number".
for (let i = 2; i <= 100; i += 2) {
  console.log(`${i} <-- is  an even number`);
}

// C. Give me Five
// 1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
for (let i = 0; i <= 100; i++) {
  if (i === 0) {
    // do nothing
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  }
  // else do nothing
}
// 2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
for (let i = 0; i <= 100; i++) {
  if (i === 0) {
    // do nothing
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High five!`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Three is a crowd`);
  }
  // else do nothing
}

// D. Savings account
// 1. Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
let bank_account = 0; 
for (let i = 0; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);
// 2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
bank_account = 0; 
for (let i = 0; i <= 100; i++) {
  bank_account += 2 * i;
}
console.log(bank_account);

// E. Multiples of 3 and 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Skipped as was already solved before in HW for Project Euler.

// III. Arrays & Control flow
// A. Talk about it:
// 1. What are the things in an array called?
// The things in an array are called its 'elements'.
// 3. Do Arrays guarantee those things will be in order?
// No you would want to sort() an array if you want them in a specific order. However, they will all have sequential indices to access the elements.
// 5. What real-life thing could you model with an array?
// A music player's playlist might be a good real-life thing to model in a simple array.

// B. Easy Does It
// 1. Create an array that contains three quotes and store it in a variable called quotes.
const quotes = ["There's always an exeption to the rule.", "The king is only playing a game of 4-dimensional chess.", "Why does everybody always end up in the kitchen?"];
console.log(quotes.toLocaleString());
// C. Accessing elements
// Given the following array 
const randomThings = [1, 10, "Hello", true];
// 1. How do you access the 1st element in the array?
// You reference the 0th element using bracket notation.
const firstElement = randomThings[0];
console.log(firstElement);
// 2. Change the value of "Hello" to "World".
randomThings[2] = "World";
// 3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);
//console.table(randomThings)

//D. Change values
// Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1. What would you write to access the 3rd element of the array?
const thirdElement =  ourClass[2];
console.log(thirdElement);
// 2. Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat";
// 3. Add a new element, "Cloud City" to the array.
ourClass.push('Cloud City');
console.table(ourClass);

// E. Mix It Up
// Given the following array:
const myArray = [5, 10, 500, 20]
// 1. Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Egon');
myArray.push('Marshmallow Man');
console.table(myArray);
// 2. Remove the 5 from the beginning of the array.
myArray.shift();
console.table(myArray);
// 3. Add the string "Bob Marley" to the beginning of the array.
myArray.unshift('Bob Marley');
console.table(myArray);
// 4. Remove the string of your choice from the end of the array.
myArray.splice(5, 1);
console.table(myArray);
// 5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
myArray.reverse();
console.table(myArray);
//Yes the reverse() function mutates the array because it changes the contents of the originally defined arrray to be reversed. It does not return a new array but does return the original location in memory for the argument array.

// F. Biggie Smalls
// Create a variable that contains an integer.
const intVar = 100;
// Write an if ... else statement that:
if (intVar < 100) {
// 1. console.log()s "little number" if the number is entered is less than 100
console.log("little number");
// 2. console.log()s big number if the number is greater than or equal to 100.
} else {
  console.log("big number")
}

// G. Monkey in the Middle
let intVar2 = '12';
// Write an if ... else if ... else statement:
if (intVar2 < 5) {
// console.log() little number if the number entered is less than 5.
console.log("little number");
// If the number entered is more than 10, log big number.
} else if (intVar2 > 10) {
  console.log("big number");
//Otherwise, log "monkey". 
} else {
  console.log("monkey")
}

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
// 1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
// 2. Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat".
kristynsCloset.splice(6, 0, 'raybans');
// 3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat" instead of yellow.
kristynsCloset[5] = 'stained knit hat';
// 4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
console.table(thomsCloset[0][0]);
// 5. In the same way, access one item from Thom's pants array.
console.table(thomsCloset[1][1]);
// 6. Access one item from Thom's accessories array.
console.table(thomsCloset[2][0]);
// 7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`)
// 8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = 'Footie Pajamas';
console.log(thomsCloset[1][2]);

// IV. Functions
// A. printGreeting
// Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// Problem skipped because further instructions indicated to skip.

// B. printCool
// Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
function printCool(name) {
  return (`${name} is cool`);
}
console.log(printCool('Captain Reynolds'));

// C. calculateCube
// Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
function calculateCube(num) {
  return (num * num * num);
}
console.log(calculateCube(5));

// D. isVowel
// Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
function isVowel(str) {
  strLower = str.toLowerCase();
  if (strLower === 'a' || strLower === 'e' || strLower === 'i' || strLower === 'o' || strLower === 'u' || strLower === 'y') {
    return true;
  }
  return false;
}
console.log(isVowel('Y'));

// E. getTwoLengths
// Write a function getTwoLengths that accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
function getTwoLengths(str1, str2) {
  const arr = [];
  arr.push(str1.length);
  arr.push(str2.length);
  return(arr);
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// F. getMultipleLengths
// Write a function getMultipleLengths that accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
function getMultipleLengths(arr) {
  const arrLengths = [];
  for (let i = 0; i < arr.length; i++) {
    arrLengths.push(arr[i].length);
  }
  return arrLengths;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// G. maxOfThree
// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned.
const maxOfThree = (num1, num2, num3) => {
  let currentMax = num1;
  if (currentMax < num2) {
    currentMax = num2;
  }
  if (currentMax < num3) {
    currentMax = num3;
  }
  return currentMax;
};
console.log(maxOfThree(6, 9, 1));

// H. printLongestWord
// Write a function printLongestWord that accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.
const printLongestWord = (arrStr) => {
  let curLongestStr = arrStr[0];
  let curMaxLength = arrStr[0].length;
  for (let i = 1; i < arrStr.length; i++) {
    if (curMaxLength < arrStr[i].length) {
      curLongestStr = arrStr[i];
      curMaxLength = curLongestStr.length;
    }
    // else do nothing and loop
  }
  return curLongestStr;
};
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// I. transmogrify
// Write a Javascript function called transmogrify. This function should accept three arguments, which you can assume will be numbers. Your function should return the "transmogrified" result.
// The transmogrified result of three numbers is the product of the first two numbers, raised to the power of the third number.
// For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
const transmogrify = (prod1, prod2, pow) => {
  const transVal = Math.pow(prod1 * prod2, pow);
  return transVal;
};
console.log(transmogrify(5, 3, 2));

// J. reverseWordOrder v2
// Without using .split(), .reverse(), or .join(), write a function reverseWordOrder that accepts a single argument, a string. The function should return a string with the order of the words reversed. Don't worry about punctuation.
// See if you can do it without googling.
const reverseWordOrder = (str) => {
  let strWordsRev = '';
  let curWordLastIndex = str.length - 1;
  let endOfWordFlag = false;
  for (let i = str.length; i >= 0; i--) {
    if (str[i] === ' ') {
      endOfWordFlag = true;
      strWordsRev += (str.slice(i + 1, curWordLastIndex + 1) + ' ');
    } else if (endOfWordFlag === true) {
      curWordLastIndex = i;
      endOfWordFlag = false;
    } // else { //do nothing and loop}
  }
  // handle/append first word in original str with index 0 to end
  strWordsRev += (str.slice(0, curWordLastIndex + 1));
  return (strWordsRev);
};
console.log(reverseWordOrder("Ishmael me Call"));
console.log(reverseWordOrder("I use Lâncome on my comb"));

// . Get down and dirty with Math.random()
// 1. Write a function that will return a random integer between 1 and 10. Test it.
const getRandOneToTen = () => {
  return Math.floor(Math.random() * 10 + 1);
};
console.log(getRandOneToTen());
// 2. Write a function that will return a random integer between 10 and 100. Test it.
const getRandTenToHundred = () => {
  return Math.floor(Math.random() * (100 - 10 + 1) + 10);
};
console.log(getRandTenToHundred());
// 3. Write a function that will return a random number between 532 and 13267. Test it.
const getRandWeirdNumRanges = () => {
  return Math.random() * (13267 - 532 + 1) + 532;
};
console.log(getRandWeirdNumRanges());
// 4. Write a function that will return a random number between 1 and 10. Test it.
const getRandNumOneToTen = () => {
  return Math.random() * (10 - 1) + 1;
};
console.log(getRandNumOneToTen());
// 5. Add a few more quotes to the quotes array from question III-B-1 above. Write a function that will take an array as a parameter, and return a random element from that array. Call your function a few times, passing in the quotes array. Give it a nice semantic name like getRandomElement.
quotes.push('I was all covered in the sound.');
quotes.push('This town is a monolith, this town is a crowded movie.');
const getRandomElement = (arr) => {
  const randomIndex = Math.floor(Math.random() * ((arr.length - 1) + 1));
  return (arr[randomIndex]);
};
console.log(getRandomElement(quotes));

// Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.
// A. Make a user object
// 1. Create an object called user.
const user = {};
// 2. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchased to an empty array []. Set the other values to whatever you would like.
user.name = 'Jake';
user.email = 'jake.s.test@yahoo.com';
user.age = 34;
user.purchased = [];
console.table(user);

// B. Update the user
// 1. Our user has changed his or her email address. Without changing the original user object, update the email value to a new email address.
user.email = 'jake.s.test@gmail.com';
// 2. Our user has had a birthday! Without changing the original user object, increment the age value using the postfix operator. Hint: age++
user.age++;
console.table(user);

// C. Adding keys and values
// You have decided to add your user's location to the data that you want to collect.
// 1. Without changing the original user object, add a new key location to the object, and give it a value or some-or-other location (a string).
user.location = 'Denver';
console.table(user);

// D. Shopaholic!
// 1. Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchased array.
user.purchased.push('carbohydrates');
// 2. Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchased array.
user.purchased.push('peace of mind');
// 3. Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchased array.
user.purchased.push('Merino jodhpurs');
// 4. Console.log just the "Merino jodhpurs" from the purchased array.
console.log(user.purchased[2]);

// E. Object-within-object
// Remember that you can add an object to an existing object in the same way that you can add any new property/value pair.
// If we want to give our user a friend with a name and age, we could write:
// user.friend = {
//   name: 'Grace Hopper',
//   age: 85,
// };
// When we console.log user, we would see the friend object added to our user object.

// 1. Write a friend object into your user object and give the friend a name, age, location, and purchased array (empty for now)
user.friend = {
  name: 'Grace Hopper',
  age: 85,
  location: 'Austin',
  purchased: [],
};
// 2. Console.log just the friend's name
console.log(user.friend.name);
// 3. Console.log just the friend's location
console.log(user.friend.location);
// 4. CHANGE the friend's age to 55
user.friend.age = 55;
console.log(user.friend.age);
// 5. The friend has purchased "The One Ring". Use .push() to add "The One Ring" to the friend's purchased array.
user.friend.purchased.push('The One Ring');
// 6. The friend has purchased "A latte". Use .push() to add "A latte" to the friend's purchased array.
user.friend.purchased.push('A latte');
// 7. Console.log just "A latte" from the friend's purchased array.
console.log(user.friend.purchased[1]);

// F. Loops
// 1. Write a for loop that iterates over the User's purchased array (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < user.purchased.length; i++) {
  console.log(user.purchased[i]);
}
// 2. Write a for loop that iterates over the Friend's purchased array, and prints each element to the console.
for (let i = 0; i < user.friend.purchased.length; i++) {
  console.log(user.friend.purchased[i]);
}

// G. Functions can operate on objects
// 1. Write a single function updateUser that takes no parameters. When the function is run, it should:
// - it should increment the user's age by 1
// - make the user's name uppercase
// The function does not need a return statement, it will merely modify the user object.
const updateUser = () => {
  user.age++;
  user.name = user.name.toLocaleUpperCase();
};
console.log(user);
updateUser();
console.log(user);
// 2. Write a function oldAndLoud that performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our user object, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoud function with user as the argument.
const oldAndLoud = (person) => {
  person.age++;
  person.name = person.name.toLocaleUpperCase();
};
oldAndLoud(user);
console.log(user);
