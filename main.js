'use strict';

// Home assignment 2

// Task 1

const user = [
  { name: 'Temo', age: 25 },
  { name: 'Lasha', age: 21 },
  { name: 'Ana', age: 28 },
];

function getUserName() {
  const minAge = Math.min(...user.map((item) => item.age));
  return user.find((item) => item.age === minAge).name;
}

const youngestName = getUserName();
console.log(youngestName);

// Task 2
// Function for the Player A
function getRandomNum1() {
  let randomNum1 = parseInt(Math.random() * 10 + 1);
  return randomNum1;
}
let randomOutput1 = getRandomNum1();
console.log(randomOutput1);

// Function for the Player B
function getRandomNum2() {
  let randomNum2 = parseInt(Math.random() * 10) + 1;
  return randomNum2;
}
let randomOutput2 = getRandomNum2();
console.log(randomOutput2);

function getWinner() {
  if (randomOutput1 === 3 && randomOutput2 === 3) {
    console.log('You both win');
  } else {
    if (randomOutput1 === 3) {
      console.log('A is a winner');
    } else if (randomOutput2 === 3) {
      console.log('B is a winner');
    }
  }
}

getWinner();

// Task 3
const person = {
  name: 'Sara',
  age: 28,
  occupation: 'Doctor',
};

let newPerson = {};

function createNewObj(item) {
  newPerson[item] = person[item];
}

for (let key in person) {
  createNewObj(key);
}

console.log(newPerson); //New object
console.log(person); //Default object
