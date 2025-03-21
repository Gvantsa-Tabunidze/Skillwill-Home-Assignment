'use strict';

// Task1
const modalBtn = document.querySelector('.modalBtn');
const modalPop = document.querySelector('.pop-up');
const closeBtn = document.querySelector('.closeBtn');

modalBtn.addEventListener('click', () => {
  modalPop.classList.add('pop-up-open');
  document.body.style.backgroundColor = 'rgba(128, 128, 128, 0.4)';
});
closeBtn.addEventListener('click', () => {
  modalPop.classList.remove('pop-up-open');
  document.body.style.backgroundColor = 'white';
});

// Task2
const colorForm = document.getElementById('sumbit-color');

const colorBtn = document.querySelector('.colorBtn');

// colors('red', 'blue', 'green', 'black', 'white')
colorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const colorInputValue = document
    .querySelector('input[type ="text"]')
    .value.toLowerCase()
    .trim();
  // console.log(colorInputValue);

  if (colorInputValue === 'red') {
    document.body.style.backgroundColor = 'red';
  }
  if (colorInputValue === 'blue') {
    document.body.style.backgroundColor = 'blue';
  }
  if (colorInputValue === 'green') {
    document.body.style.backgroundColor = 'green';
  }
  if (colorInputValue === 'black') {
    document.body.style.backgroundColor = 'black';
  }
  if (colorInputValue === 'white') {
    document.body.style.backgroundColor = 'white';
  }
  alert(`Hey, ${colorInputValue} is invalid value`);
});

// Task3

const averageBtn = document.querySelector('.average');
averageBtn.addEventListener('click', averageOnClick);

function averageOnClick() {
  const getInputValue = this.previousElementSibling.value.trim().split(':');
  console.log(getInputValue);

  const totalAmount =
    getInputValue
      .map((str) => Number(str))
      .reduce((acc, currentValue) => acc + currentValue) / getInputValue.length;
  alert(totalAmount);
}
