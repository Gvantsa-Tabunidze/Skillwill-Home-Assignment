'use strict';

// Home work 3

// Task 1

function getSums(number1, number2, ...restparams) {
  // first sum
  let pulledParams = [];
  pulledParams.push(number1, number2);
  // console.log(pulledParams)
  function sum1() {
    let sum1 = 0;
    for (let i of pulledParams) {
      sum1 += i;
    }
    return sum1;
  }

  let computedsum1 = sum1();
  // console.log(computedsum1)

  // Second sum
  function sum2() {
    let sum2 = 0;
    for (let n of restparams) {
      sum2 += n;
    }
    return sum2;
  }
  let computedsum2 = sum2();
  // console.log(computedsum2)

  // return newArray
  let newArray = [];
  newArray.push(computedsum1, computedsum2);
  return newArray;
}

let result = getSums(7, 8, 3, 4, 5);
console.log(result);

// Task2
let user = {
  fullName: 'John Doe',
  banks: [
    { name: 'bog', address: { city: 'Tbilisi', street: 'Marjanishvili 4' } },
    { name: 'tbc', address: { city: 'Tbilisi', street: 'Sh.Rustaveli 1' } },
    { name: 'credo', address: { city: 'Kutaisi', street: 'B.Kalandadze 12' } },
  ],
};

let requisits = () => {
  let { banks } = user;

  let [, secondBank, ,] = banks;

  let { address: { city } = {} } = secondBank;
  return city;
};
let newData = requisits(user);
console.log(newData);

// Task3
let profile = {
  name: 'Jack',
  nickname: 'Sparrow',
  appearance: {
    age: 40,
    height: 180,
    weight: 85,
  },
  face: ['browns hair', 'brown eyes', 'dark skin'],
  sex: 'Male',
};

let copy = () => {
  let profile2 = {
    ...profile,
    appearance: {
      ...profile.appearance,
    },
    face: [...profile.face],
  };

  return profile2;
};

let profileCopy = copy(profile);
console.log(profileCopy);
console.log(profile);
