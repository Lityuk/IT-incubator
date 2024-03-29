var list1 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

function getAverageAge(list) {
  return Math.round(
    list.reduce((a, b) => {
      return a + b.age;
    }, 0) / list.length
  );
}

// console.log(getAverageAge(list1))

const remainder = (D, d) => D - Math.floor(D / d) * d;

function isRubyComing(list) {
  return list.map((i) => i.language === "Ruby").find((el) => el === true)
    ? true
    : false;
}

// console.log(isRubyComing(list1))

function getFirstPython(list) {
  let result = list.find((i) => i.language === "Python");
  return result === undefined
    ? `There will be no Python developers`
    : `${result.firstName}, ${result.country}`;
}

list1 = [
  {
    firstName: null,
    lastName: "I.",
    country: "Argentina",
    continent: "Americas",
    age: 35,
    language: "Java",
  },
  {
    firstName: "Lukas",
    lastName: "X.",
    country: "Croatia",
    continent: "Europe",
    age: 35,
    language: null,
  },
  {
    firstName: "Madison",
    lastName: "U.",
    country: "United States",
    continent: "Americas",
    age: 32,
    language: "Ruby",
  },
];

function askForMissingDetails(list) {
  return (result = list
    .map((i) => {
      for (let val in i) {
        if (i[val] === null) {
          i.question = `Hi, could you please provide your ${val}.`;
          return i;
        }
      }
    })
    .filter((j) => j != undefined));
}

// console.log(askForMissingDetails(list1)[0]);

// !Narcissistic Numbers
function isNarcissistic(n) {
  const arr = Array.from(n.toString());

  return arr.map((el) => Math.pow(el, arr.length)).reduce((prev, curr) => prev + curr) === n;

}

isNarcissistic(435);


function chain(input, fs) {

    console.log(fs.reduce((prev, curr )=> {
      return curr(prev)
     }, input));

  }


  function add(x) {
    return x + 10;
  }

  function mult(x) {
    return x * 30;
  }

  chain(2, [add, mult])

