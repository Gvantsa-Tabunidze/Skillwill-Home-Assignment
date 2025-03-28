'use strict';

// Task 1
// function expoRecursive(number, expo, callback) {
//   if (expo === 0) return 1;
//   return callback(number, expoRecursive(number, expo - 1, callback))
// }

// const resultReturn = expoRecursive(2, 3, (number, ex) =>number*ex);
// console.log(resultReturn);

// // Task2
// async function getPosts(){
//   try{
//     const response = await fetch('https://reqres.in/api/users?page=1')
//     if(!response.ok){
//       throw Error('Hey, here is an error occured')
//     }

//     const repsonseData = await response.json()
//     console.log(repsonseData)

//     repsonseData.data.forEach(element => {
//       const userCard = document.createElement('div')
//       userCard.classList.add('CardStyle')
//       const userPhoto = document.createElement('img')
//       userPhoto.src = element.avatar
//       userPhoto.classList.add('userPic')
//       const userName = document.createElement('h2')
//       userName.innerText = `${element.first_name} ${element.last_name
//       }`
//       const userEmail = document.createElement('p')
//       userEmail.innerText = element.email

//       userCard.append(userPhoto,userName, userEmail)
//       const userCards = document.querySelector('.USerCards')
//       userCards.appendChild(userCard)
//     });

//   } catch(error){
// console.log(error.message)
//   }
// }

// getPosts()

// Task3

let initialObject = {
  name: 'May',
  age: 18,
  address: {
    coountry: 'USA',
    city: 'Portland',
  },
};

function CopyObject(object) {
  const newObject = JSON.parse(JSON.stringify(object));
  return new Promise((resolve, reject) => {
    if (typeof object !== 'object') return reject('This is not an object');
    return resolve(`Here is the copied object ${JSON.stringify(newObject)}`);
  });
}
CopyObject(initialObject)
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
