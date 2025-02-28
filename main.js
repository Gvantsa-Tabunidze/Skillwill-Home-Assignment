'use strict';

// Task 1

const checkNumbers = function (a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return 'შეცდომა მატრიცაში';
  }
};

const result = checkNumbers(2, 6);
console.log(result);

// Task 2
function convertTemp(fahrenheit) {
  if (typeof fahrenheit !== 'number') {
    return false;
  } else {
    let celsius = ((fahrenheit - 32) * 5) / 9;
    return celsius;
  }
}

console.log(convertTemp(45));

// Task 3
function mathOperation(a, b, operation) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return false;
  }

  const validOperators = ['+', '-', '*', '/'];
  if (validOperators.includes(operation)) {
    if (operation === '/' && b === 0) {
      return 'You can not divide by 0'
    }

    return eval(`${a}${operation}${b}`);
  } else {
    return 'Invalid operator';
  }
}

console.log(mathOperation(500, 200, '+'));
console.log(mathOperation(500, 200, '-'));
console.log(mathOperation(500, 200, '*'));
console.log(mathOperation(500, 200, '/'));
