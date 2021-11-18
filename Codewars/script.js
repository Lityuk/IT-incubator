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
  arr.forEach(key => {
    key[1] >= 60 ? result.push(key[0]) : false;
  })
  return result;
}

