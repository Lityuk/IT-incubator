var greet = function (name) {
  return `Hello ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`;
};

function litres(time) {
  return Math.floor(time / 2);
}

function solution(number) {
  if (number < 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
