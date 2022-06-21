const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((last, next) => {
    return last + next;
  }, 0)

};

const multiply = function (array) {
  let mult = 1;
  const product = array.forEach(element => {
    if (element === 0) {
      return 0;
    } else {
      mult = element * mult;
    }
  });
  return mult;
};

const power = function (a, b) {
  let square = a;
  for (let index = 0; index < b - 1; index++) {
    square = square * a;
  }
  return square;
};

const factorial = function (n) {
  return (n === 1 || n === 0) ? 1 : n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
