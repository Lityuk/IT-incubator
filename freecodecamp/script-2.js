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
function testStrictNotEqual(val) {
  if (val !== 17) {
    // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//   //!! 65 -  Task
function testGreaterThan(val) {
  if (val > 100) {
    // Change this line
    return "Over 100";
  }

  if (val > 10) {
    // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);

//   //!! 66 -  Task
function testGreaterOrEqual(val) {
  if (val >= 20) {
    // Change this line
    return "20 or Over";
  }

  if (val >= 10) {
    // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//   //!! 67 -  Task
function testLessThan(val) {
  if (val < 25) {
    // Change this line
    return "Under 25";
  }

  if (val < 55) {
    // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//!! 68 -  Task

function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//!! 69 -  Task

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes";
  }

  // Only change code above this line
  return "No";
}

testLogicalAnd(10);

//!! 70 -  Task

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);

//!! 71 -  Task
function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4);

//!! 72 -  Task
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

testElseIf(7);


//!! 73 -  Task
function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }

  orderMyLogic(7);

//!! 74 -  Task
  function testSize(num) {
    // Only change code below this line
  if(num < 5) {
    return "Tiny"
  } else if(num < 10) {
    return "Small"
  } else if(num < 15) {
    return "Medium"
  } else if(num < 20) {
    return "Large"
  } else if (num >= 20){
    return "Huge"
  }

    return "Change Me";
    // Only change code above this line
  }

  testSize(7);


//!! 75 -  Task
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes == par - 1) {
    return names[2]
  } else if (strokes == par) {
    return names[3]
  } else if (strokes == par + 1) {
    return names[4]
  }else if (strokes == par + 2) {
    return names[5]
  }else if (strokes >= par + 3) {
    return names[6]
  }

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);