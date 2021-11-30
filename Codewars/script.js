var greet = function (name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};

function litres(time) {
  return Math.floor(time / 2);
}

function solution(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

// TODO: implement the four functions specified.
function head(arr) {
  return arr[0];
}

function tail(arr) {
  return arr.slice(1);
}

function init(arr) {
  return arr.slice(0, arr.length - 1);
}

function last(arr) {
  return arr[arr.length - 1];
}

function deepCount(arr) {
  let sum = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += deepCount(arr[i]);
    }
  }
  console.log(sum);
  return sum;
}

// deepCount([1, 2, [3, 4, [5]]]);

// !The Coupon Code

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}

function unluckyDays(year) {
  let count = 0;
  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() == 5) {
      count++;
    }
  }

  return count;
}

function myLanguages(results) {
  let arr = Object.entries(results);
  let result = [];

  arr.sort(function (a, b) {
    return a[1] < b[1] ? 1 : -1;
  });

  console.log(arr);
  arr.forEach((key) => {
    key[1] >= 60 ? result.push(key[0]) : false;
  });
  return result;
}

// let validWord = function (dictionary, word) {
//   for (let i = 1; i <= word.length; i++) {
//     console.log(word.slice(i));
//     console.log(word.slice(0, i));
//     if (dictionary.includes(word.slice(0, i))) {
//       if (validWord(dictionary, word.slice(i))) {
//         console.log(true);
//         return true;
//       }
//     }
//   }
//   return (word.length == 0) ? true : false;
// }
//
// validWord(["ab", "a", "abc"], "codewars");

function roundToNext5(n) {
  return n <= 0 || n % 5 == 0 ? n - (n % 5) : n + (5 - (n % 5));
}

function sortByBit(arr) {
  arr.sort(function (a, b) {
    if (
      Array.from(a.toString(2)).reduce((sum, el) => sum + +el, 0) >
      Array.from(b.toString(2)).reduce((sum, el) => sum + +el, 0)
    ) {
      return 1;
    }
    if (
      Array.from(a.toString(2)).reduce((sum, el) => sum + +el, 0) <
      Array.from(b.toString(2)).reduce((sum, el) => sum + +el, 0)
    ) {
      return -1;
    }
    return a.toString(2) - b.toString(2);
  });
  console.log(arr);
}

let a = [3, 8, 3, 6, 5, 7, 9, 1];
sortByBit(a);

class Song {
  constructor(title, artist) {
    this.title = title;
    this.artist = artist;
    this.listeners = [];
  }
  howMany(arr) {
    let result = [];
    arr.forEach((e) => {
      if (this.listeners.includes(e.toLowerCase())) {
      } else {
        this.listeners.push(e.toLowerCase());
        result.push(e);
      }
    });

    console.log(result.length);
    return result.length;
  }
}

let mountMoose = new Song("Mount Moose", "The Snazzy Moose");
mountMoose.howMany(["John", "joHN", "carl"]);
mountMoose.howMany(["John", "Fred", "Bob", "Carl", "RyAn"]);
