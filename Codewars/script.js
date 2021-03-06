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
    // console.log(arr);
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

        // console.log(result.length);
        return result.length;
    }
}

let mountMoose = new Song("Mount Moose", "The Snazzy Moose");
mountMoose.howMany(["John", "joHN", "carl"]);
mountMoose.howMany(["John", "Fred", "Bob", "Carl", "RyAn"]);

function singleDigit(n) {
    if (n < 10) {
        return n;
    }
    let sum = Array.from(n.toString(2)).reduce((a, b) => a + +b, 0);
    return sum < 10 ? sum : singleDigit(sum);
}

singleDigit(5);

function faroCount(deckSize) {
    let arr = [];
    let firstHalf = [];
    let secondHalf = [];
    let shuffleDeck = [];
    let count = 1;

    for (let i = 0; i < deckSize; i++) {
        arr.push(i);
        i < deckSize / 2 ? firstHalf.push(i) : secondHalf.push(i);
    }

    for (let j = 0; j < deckSize / 2; j++) {
        shuffleDeck.push(firstHalf[j]);
        shuffleDeck.push(secondHalf[j]);
    }

    while (shuffleDeck.join("") != arr.join("")) {
        firstHalf = shuffleDeck.slice(0, deckSize / 2);
        secondHalf = shuffleDeck.slice(deckSize / 2);
        shuffleDeck = [];
        for (let j = 0; j < deckSize / 2; j++) {
            shuffleDeck.push(firstHalf[j]);
            shuffleDeck.push(secondHalf[j]);
        }
        count++;
    }

    console.log(count);
}

// faroCount(30);

function bump(x) {
    return x.match(/n/g) == null || x.match(/n/g).length <= 15 ? "Woohoo!" : "Car Dead";
}

bump("___");

function strCount(str, letter) {
    console.log(str.split(letter).length - 1)
}

// strCount('Hello', 'o')


function adjacentElementsProduct(array) {
    let newArr = array.map((i, index) => {
        return index == array.length - 1 ? i * array[index - 1] : i * array[index + 1];
    })

    console.log(Math.max(...newArr))
}

adjacentElementsProduct([1, 5, 10, 9]);


function incrementer(nums) {
    let arr = [];
    let i = 0;

    arr = nums.map((m) => {
        i++;
        return (m + i) % 10;
    });
}

incrementer([4, 6, 7, 1, 3]);

var buy = function (x, arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (x == arr[i] + arr[j]) {
                console.log(arr[i], arr[j]);
                console.log([i, j]);
                return
            }
        }
    }

    return null;
};

buy(5, [5, 2, 3, 4, 5]);
buy(3,[1,1])