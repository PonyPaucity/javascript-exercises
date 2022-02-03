const add = function (a, b) {
  return a + b
};

const subtract = function (a, b) {
  return a - b
};

const sum = function (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i]
  } return sum
};

const multiply = function (a) {
  let multiplcation = 1;
  for (let i = 0; i < a.length; i++) {
    multiplcation *= a[i]
  } return multiplcation
};

const power = function (a, b) {
  return Math.pow(a, b)
};

const factorial = function (n) {
  return n ? n * factorial(n - 1) : 1;
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
