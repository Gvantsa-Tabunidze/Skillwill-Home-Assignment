'use strict';

// Task1
let createString = (string, valueToreplace, valueToReplaceWith) => {
  const strN = valueToreplace
    .slice(valueToreplace.length)
    .concat(valueToReplaceWith);
  return string.concat(strN);
};
console.log(createString('', 'Samantha', 'Peter'));

// Task2
let upperCase = (text) => {
  const sentnce = text
    .split(' ')
    .map((el) => el.toUpperCase())
    .join(' ');

  return sentnce;
};
console.log(
  upperCase(
    'butterfly migration is best exemplified by the Monarch, which is widely known to migrate in the fall'
  )
);

// Task3

const clients = [
  { name: 'Lasha', age: 30 },
  { name: 'Saba', age: 20 },
];

const sortByAge = (users) => {
  return users.sort((a, b) => a.age - b.age);
};
console.log(sortByAge(clients));
