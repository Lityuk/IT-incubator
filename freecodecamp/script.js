// The first comment

/* the second comment */

//!! 2nd Task

// var myName;

//!! 3d Task
// var a;
// a = 7;

//!! 4th Task
// var a;
// a = 7;
// var b;
// b = a;
//!! 5th Task
// var a = 9;

//!! 6th Task

// let myFirstName  = "Vladimir";
// let myLastName = "Lityuk";

//!! 7th Task

// var a = 5;
// var b = 10;
// var c = "I am a";

//!! 8th Task
// Variable declarations
// var studlyCapVar;
// var properCamelCase;
// var titleCaseOver;

// studlyCapVar = 10;
// properCamelCase = "A String";
// titleCaseOver = 9000;

// //!! 9 Task
// let catName = "Oliver";
// let catSound = "Meow!";

//!! 10 Task
// const FCC = "freeCodeCamp"; // Change this line
// let fact = "is cool!"; // Change this line
// fact = "is awesome!";
// console.log(FCC, fact); // Change this line

//!! 11 Task
// const sum = 10 + 10;

//!! 12 Task
// const difference = 45 - 33;

// //!! 13-25  Tasks

// const product = 8 * 10;

// const quotient = 66 / 33;

// let myVar = 87;
// myVar++;

// myVar--;

// const myDecimal = 5.7;
// const product = 2.0 * 2.5;
// const quotient = 4.4 / 2.0;
// const remainder = 11 % 3;

// let a = 3;
// let b = 17;
// let c = 12;

// // Only change code below this line
// a += 12;
// b += 9;
// c += 7;

// let a = 11;
// let b = 9;
// let c = 3;

// // Only change code below this line
// a -= 6;
// b -= 15;
// c -= 1;

// let a = 5;
// let b = 12;
// let c = 4.6;

// // Only change code below this line
// a *= a;
// b *= 3;
// c *= 10;

// let a = 48;
// let b = 108;
// let c = 33;

// a /= 12;
// b /= 4;
// c /= 11;

// const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

//!! 26 - 29 Tasks
// const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

// const myStr = "This is the start. " + "This is the end."; // Change this line

// let myStr = "This is the first sentence. ";
// myStr += "This is the second sentence.";

//!! 30 - 40 Tasks

// const myName = "Vladimir";
// const myStr = "My name is " + myName + " and I am well!";

// const someAdjective = "amazing";
// let myStr = "Learning to code is ";
// myStr += someAdjective;

// // Setup
// let lastNameLength = 0;
// const lastName = "Lovelace";

// // Only change code below this line
// lastNameLength = lastName.length;

// // Setup
// let firstLetterOfLastName = "";
// const lastName = "Lovelace";

// // Only change code below this line
// firstLetterOfLastName = lastName[0]; // Change this line

// // Setup
// let myStr = "Jello World";
// myStr = "Hello World"; // Change this line

// // Setup
// const lastName = "Lovelace";
// const thirdLetterOfLastName = lastName[2]; // Change this line

// // Setup
// const lastName = "Lovelace";
// const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

// // Setup
// const lastName = "Lovelace";
// const secondToLastLetterOfLastName = lastName[lastName.length-2]; // Change this line

// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";

// const wordBlanks =
//   "The " +
//   myNoun +
//   " is " +
//   myAdjective +
//   " and he " +
//   myVerb +
//   " very " +
//   myAdverb;

// const myArray = ["string", 3];

// // Only change code below this line
// const myArray = [[], []];

// //!! 41-50 -  Tasks
// const myArray = [50, 60, 70];

// let myData = myArray[0];

// // Setup
// const myArray = [18, 64, 99];

// // Only change code below this line
// myArray[0] = 45;

// const myArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
//   [[10, 11, 12], 13, 14],
// ];

// const myData = myArray[2][1];

// // Setup
// const myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];

// // Only change code below this line
// myArray.push(["dog", 3]);

// // Setup
// const myArray = [
//   ["John", 23],
//   ["cat", 2],
// ];

// // Only change code below this line
// let removedFromMyArray = myArray.pop();

// let removedFromMyArray = myArray.shift();

// // Setup
// const myArray = [
//   ["John", 23],
//   ["dog", 3],
// ];
// myArray.shift();

// // Only change code below this line
// myArray.unshift(["Paul", 35]);

// const myList = [
//   ["Chocolate Bar", 15],
//   ["Bar2", 16],
//   ["Bar3", 17],
//   ["Bar4", 20],
//   ["Bar5", 25],
// ];

// function reusableFunction() {
//     console.log("Hi World");
//   }

//   reusableFunction();

//   function functionWithArgs(a,b) {
//     console.log(a + b);
//     }

//     functionWithArgs(3, 5);

//!! 51-55 -  Tasks

function timesFive(num) {
    return num * 5;
  }

  // Declare the myGlobal variable below this line
let myGlobal = 10;
let oopsGlobal;

function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

function myLocalScope() {
    // Only change code below this line
  var myVar;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();

  // Run and check the console
  // myVar is not defined outside of myLocalScope
  console.log('outside myLocalScope', myVar);

  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
//!! 56 -  Task
// Only change code below this line
processed = processArg(7);

//!! 57 -  Task
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    let deleted = arr[0];
    arr.shift();

    return deleted;
    // Only change code above this line
  }

  // Setup
  const testArr = [1, 2, 3, 4, 5];

  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


  //!! 58 -  Task
  function welcomeToBooleans() {
    // Only change code below this line

    return true; // Change this line

    // Only change code above this line
  }

//!! 59 -  Task
  function trueOrFalse(wasThatTrue) {
    // Only change code below this line

  return wasThatTrue ? "Yes, that was true" : "No, that was false";

    // Only change code above this line

  }