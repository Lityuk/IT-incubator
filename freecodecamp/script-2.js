// //!! 61 -  Task
// // Setup
// function testStrict(val) {
//     if (val === 7) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }

//   testStrict(10);

//   //!! 62 -  Task

//   // Setup
// function compareEquality(a, b) {
//     if (a === b) { // Change this line
//       return "Equal";
//     }
//     return "Not Equal";
//   }

//   compareEquality(10, "10");

//   //!! 63 -  Task
//   // Setup
// function testNotEqual(val) {
//     if (val != 99) { // Change this line
//       return "Not Equal";
//     }
//     return "Equal";
//   }

//   testNotEqual(10);

//   //!! 64 -  Task
// Setup
// function testStrictNotEqual(val) {
//   if (val !== 17) {
//     // Change this line
//     return "Not Equal";
//   }
//   return "Equal";
// }

// testStrictNotEqual(10);

// //   //!! 65 -  Task
// function testGreaterThan(val) {
//   if (val > 100) {
//     // Change this line
//     return "Over 100";
//   }

//   if (val > 10) {
//     // Change this line
//     return "Over 10";
//   }

//   return "10 or Under";
// }

// testGreaterThan(10);

// //   //!! 66 -  Task
// function testGreaterOrEqual(val) {
//   if (val >= 20) {
//     // Change this line
//     return "20 or Over";
//   }

//   if (val >= 10) {
//     // Change this line
//     return "10 or Over";
//   }

//   return "Less than 10";
// }

// testGreaterOrEqual(10);

// //   //!! 67 -  Task
// function testLessThan(val) {
//   if (val < 25) {
//     // Change this line
//     return "Under 25";
//   }

//   if (val < 55) {
//     // Change this line
//     return "Under 55";
//   }

//   return "55 or Over";
// }

// testLessThan(10);

// //!! 68 -  Task

// function testLessOrEqual(val) {
//   if (val <= 12) {
//     // Change this line
//     return "Smaller Than or Equal to 12";
//   }

//   if (val <= 24) {
//     // Change this line
//     return "Smaller Than or Equal to 24";
//   }

//   return "More Than 24";
// }

// testLessOrEqual(10);

// //!! 69 -  Task

// function testLogicalAnd(val) {
//   // Only change code below this line

//   if (val <= 50 && val >= 25) {
//     return "Yes";
//   }

//   // Only change code above this line
//   return "No";
// }

// testLogicalAnd(10);

// //!! 70 -  Task

// function testLogicalOr(val) {
//   // Only change code below this line

//   if (val < 10 || val > 20) {
//     return "Outside";
//   }

//   // Only change code above this line
//   return "Inside";
// }

// testLogicalOr(15);

// //!! 71 -  Task
// function testElse(val) {
//   let result = "";
//   // Only change code below this line

//   if (val > 5) {
//     result = "Bigger than 5";
//   } else {
//     result = "5 or Smaller";
//   }

//   // Only change code above this line
//   return result;
// }

// testElse(4);

// //!! 72 -  Task
// function testElseIf(val) {
//   if (val > 10) {
//     return "Greater than 10";
//   } else if (val < 5) {
//     return "Smaller than 5";
//   } else {
//     return "Between 5 and 10";
//   }
// }

// testElseIf(7);

// //!! 73 -  Task
// function orderMyLogic(val) {
//   if (val < 5) {
//     return "Less than 5";
//   } else if (val < 10) {
//     return "Less than 10";
//   } else {
//     return "Greater than or equal to 10";
//   }
// }

// orderMyLogic(7);

// //!! 74 -  Task
// function testSize(num) {
//   // Only change code below this line
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//     return "Small";
//   } else if (num < 15) {
//     return "Medium";
//   } else if (num < 20) {
//     return "Large";
//   } else if (num >= 20) {
//     return "Huge";
//   }

//   return "Change Me";
//   // Only change code above this line
// }

// testSize(7);

// //!! 75 -  Task
// const names = [
//   "Hole-in-one!",
//   "Eagle",
//   "Birdie",
//   "Par",
//   "Bogey",
//   "Double Bogey",
//   "Go Home!",
// ];

// function golfScore(par, strokes) {
//   // Only change code below this line
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes == par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   }

//   return "Change Me";
//   // Only change code above this line
// }

// golfScore(5, 4);

// //!! 76 -  Task
// function caseInSwitch(val) {
//   let answer = "";
//   // Only change code below this line

//   switch (val) {
//     case 1:
//       answer = "alpha";
//       break;
//     case 2:
//       answer = "beta";
//       break;
//     case 3:
//       answer = "gamma";
//       break;
//     case 4:
//       answer = "delta";
//       break;
//   }

//   // Only change code above this line
//   return answer;
// }

// caseInSwitch(1);

// //!! 77 -  Task

// function switchOfStuff(val) {
//     let answer = "";
//     // Only change code below this line
//     switch (val) {
//       case "a":
//         answer = "apple";
//         break;
//       case "b":
//         answer = "bird";
//         break;
//       case "c":
//         answer = "cat";
//         break;
//       default:
//         answer = "stuff";
//     }

//         // Only change code above this line
//         return answer;
//     }

//     switchOfStuff(1);

// //!! 78 -  Task
//     function sequentialSizes(val) {
//         let answer = "";
//         // Only change code below this line
//         switch (val) {
//           case 1:
//           case 2:
//           case 3:
//             answer = "Low";
//             break;
//           case 4:
//           case 5:
//           case 6:
//             answer = "Mid";
//             break;
//           case 7:
//           case 8:
//           case 9:
//             answer = "High";
//             break;
//         }

//         // Only change code above this line
//         return answer;
//       }

//       sequentialSizes(1);

// //!! 79 -  Task

//       function chainToSwitch(val) {
//         let answer = "";
//         // Only change code below this line

//         switch (val) {
//           case "bob":
//             answer = "Marley";
//             break;
//           case 42:
//             answer = "The Answer";
//             break;
//           case 1:
//             answer = "There is no #1";
//             break;
//           case 99:
//             answer = "Missed me by this much!";
//             break;
//             case 7:
//             answer = "Ate Nine";
//             break;

//         }

//         // Only change code above this line
//         return answer;
//       }

//       chainToSwitch(7);

// //!! 80 -  Task
//       function isLess(a, b) {
//         // Only change code below this line
//         return a < b;
//         // Only change code above this line
//       }

//       isLess(10, 15);

// //!! 81 -  Task
//       // Setup
// function abTest(a, b) {
//     // Only change code below this line

//   if(a < 0  || b < 0 ) {
//     return undefined;
//   }

//     // Only change code above this line

//     return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
//   }

//   abTest(2,2);

// //!! 82 -  Task
//   let count = 0;

// function cc(card) {
//   // Only change code below this line
//   if (card < 7) {
//     count++;
//   } else {
//     switch (card) {
//       case 10:
//       case 'J':
//       case 'Q':
//       case 'K':
//       case 'A':
//         count--;
//     }
//   }

// if (count <= 0) {
//   return count + " Hold"
// } else {
//    return count + " Bet"
// }

//     return "Change Me";
//   // Only change code above this line
// }

// cc(2); cc(3); cc(7); cc('K'); cc('A');

// //!! 83 -  Task

// const myDog = {
//     // Only change code below this line
//     "name": "Bob",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["human", "another one"],

//     // Only change code above this line
//   };

//   //!! 84 -  Task
// const testObj = {
//     "hat": "ballcap",
//     "shirt": "jersey",
//     "shoes": "cleats"
//   };

//   // Only change code below this line
//   const hatValue = testObj.hat;      // Change this line
//   const shirtValue = testObj.shirt;    // Change this line

//   //!! 85 -  Task
// // Setup
// const testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water"
//   };

//   // Only change code below this line
//   const entreeValue = testObj["an entree"];   // Change this line
//   const drinkValue = testObj["the drink"];    // Change this line

// //   //!! 86 -  Task
//   // Setup
// const testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };

//   // Only change code below this line
//   const playerNumber = 16;  // Change this line
//   const player = testObj[playerNumber];   // Change this line

// //!! 87 -  Task
//   // Setup
// const myDog = {
//     "name": "Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };
//   myDog.name = "Happy Coder";
//   // Only change code below this line

// //!! 88 -  Task
//   const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"]
//   };

//   myDog.bark = "woof";

// //!! 89 -  Task
// const myDog = {
//     "name": "Happy Coder",
//     "legs": 4,
//     "tails": 1,
//     "friends": ["freeCodeCamp Campers"],
//     "bark": "woof"
//   };

//   // Only change code below this line
//   delete myDog.tails;

//!! 90 -  Task
// function phoneticLookup(val) {
//   let result = "";

//   // Only change code below this line
//   let loocup = {
//     alpha: "Adams",

//     bravo: "Boston",

//     charlie: "Chicago",

//     delta: "Denver",
//     echo: "Easy",

//     foxtrot: "Frank",
//   };

//   result = loocup[val];
//   // Only change code above this line
//   return result;
// }

// phoneticLookup("charlie");

// //!! 91 -  Task

// function checkObj(obj, checkProp) {
//     // Only change code below this line

//     return obj.hasOwnProperty(checkProp) ? obj[checkProp]:"Not Found";

//     // Only change code above this line
//   }

// //!! 92 -  Task

//   const myMusic = [
//     {
//       "artist": "Billy Joel",
//       "title": "Piano Man",
//       "release_year": 1973,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//       "gold": true,
//     },
//     {
//       "artist": "Nirvana",
//       "title": "In Utero",
//       "release_year": 1993,
//       "formats": [
//         "CD",
//         "8T",
//         "LP"
//       ],
//     }
//   ];

// //!! 93 -  Task

//   const myStorage = {
//     "car": {
//       "inside": {
//         "glove box": "maps",
//         "passenger seat": "crumbs"
//        },
//       "outside": {
//         "trunk": "jack"
//       }
//     }
//   };

//   const gloveBoxContents = myStorage.car.inside["glove box"];

// //!! 94 -  Task
//   const myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];

//   const secondTree = myPlants[1].list[1];

//!! 95 -  Task

// Setup
// const recordCollection = {
//   2548: {
//     albumTitle: "Slippery When Wet",
//     artist: "Bon Jovi",
//     tracks: ["Let It Rock", "You Give Love a Bad Name"],
//   },
//   2468: {
//     albumTitle: "1999",
//     artist: "Prince",
//     tracks: ["1999", "Little Red Corvette"],
//   },
//   1245: {
//     artist: "Robert Palmer",
//     tracks: [],
//   },
//   5439: {
//     albumTitle: "ABBA Gold",
//   },
// };

// // Only change code below this line
// function updateRecords(records, id, prop, value) {
//   if (prop != "tracks" && value != "") {
//     records[id][prop] = value;
//   }
//   if (prop == "tracks" && records[id][prop] == undefined) {
//     records[id][prop] = [];
//     records[id][prop].push(value);
//   } else if (prop == "tracks" && value != "") {
//     records[id][prop].push(value);
//   }
//   if (value == "") {
//     delete records[id][prop];
//   }

//   return records;
// }

// updateRecords(recordCollection, 5439, "artist", "ABBA");

// //!! 96 -  Task

// // Setup
// const myArray = [];
// let i = 5;

// while (i >= 0) {
//   myArray.push(i);
//   i--;
// }
// // Only change code below this line

// //!! 97 -  Task
// // Setup
// const myArray = [];
// for (let i = 1; i <= 5; i++) {
//   myArray.push(i);
// }
// // Only change code below this line

// //!! 98 -  Task
// // Setup
// const myArray = [];
// for (let i = 1; i < 10; i += 2) {
//   myArray.push(i);
// }
// // Only change code below this line

// //!! 99 -  Task
// // Setup
// const myArray = [];
// for (let i = 9; i > 0; i -= 2) {
//   myArray.push(i);
// }
// // Only change code below this line

// //!! 100 -  Task
// // Setup
// const myArr = [2, 3, 4, 5, 6];
// let total = 0;
// for (let i = 0; i < myArr.length; i++) {
//   total += myArr[i];
// }
// // Only change code below this line

// //!! 101 -  Task
// function multiplyAll(arr) {
//   let product = 1;
//   // Only change code below this line
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       product *= arr[i][j];
//     }
//   }

//   // Only change code above this line
//   return product;
// }

// multiplyAll([
//   [1, 2],
//   [3, 4],
//   [5, 6, 7],
// ]);

// //!! 102 -  Task

// // Setup
// const myArray = [];
// let i = 10;

// // Only change code below this line
// do {
//   myArray.push(i);
//   i++;
// } while (i < 11);

// //!! 103 -  Task

function sum(arr, n) {
  // Only change code below this line
  if (n == 0) {
    return 0;
  } else {
    return arr[n - 1] + sum(arr, n - 1);
  }
  // Only change code above this line
}
``;

// //!! 104 -  Task

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++) {
    if (name == contacts[i].firstName) {
      if (prop in contacts[i]) {
        return contacts[i][prop];
      } else return "No such property";
    }
  }
  return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");

// //!! 105 -  Task
function randomFraction() {
  // Only change code below this line

  return Math.random();

  // Only change code above this line
}

// //!! 106 -  Task

function randomWholeNum() {
  // Only change code below this line

  return Math.floor(Math.random() * 10);
}

// //!! 107 -  Task
function randomRange(myMin, myMax) {
  // Only change code below this line
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  // Only change code above this line
}

// //!! 108 -  Task
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// //!! 109 -  Task
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");

// //!! 110 -  Task
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


// //!! 111 -  Task
function checkSign(num) {
  return num > 0 ? "positive" : num == 0 ? "zero" : "negative";
}

checkSign(10);

// //!! 112 -  Task
// Only change code below this line
function countdown(n) {

  if (n < 1) {
    return [];
  } else {
    let countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}
// Only change code above this line

// //!! 113 -  Task
function rangeOfNumbers(startNum, endNum) {
  if (endNum == startNum) {
    return [startNum];
  }
  let countArr = rangeOfNumbers(startNum, endNum - 1);
  countArr.push(endNum);
  return countArr;
};
