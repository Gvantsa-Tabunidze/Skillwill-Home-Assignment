'use strict';

// Task 1

const mainDiv = document.getElementById('popDiv');
const divEl = document.createElement('div');
divEl.setAttribute('id', 'pop-up');
divEl.classList.add('pop-UP');

const popupText = document.createElement('h2');
popupText.innerText = "Hello it's pop-up here!";
divEl.appendChild(popupText);

const popUpBtn = document.createElement('button');
popUpBtn.innerText = 'Close';
popUpBtn.style.marginTop = '24px';

mainDiv.append(divEl, popUpBtn);

popUpBtn.addEventListener('click', () => {
  divEl.style.display = 'none';
});

// Task 2
const divCard = document.createElement('div');
divCard.setAttribute('id', 'divCard');
divCard.classList.add('divCard');
const divText = document.createElement('h2');
divText.innerText = 'Gandalf';
const linkToPage = document.createElement('a');
linkToPage.setAttribute('href', 'https://www.facebook.com/');
linkToPage.innerHTML = 'learn more';

divCard.append(divText, linkToPage);

mainDiv.appendChild(divCard);

// Task3
const quizDiv = document.createElement('div');
quizDiv.classList.add('quizDiv');
const quizText = document.createElement('p');
quizText.innerText = 'Whats the largest river in the World?';
const answers = document.createElement('ul');
answers.style.listStyle = 'none';
answers.innerHTML = `
<li><input type = 'radio' name = 'options' value="Amazon">Amazon</li>
<li><input type = 'radio' name = 'options' value="Nile">Nile</li>
<li><input type = 'radio' name = 'options' value="Mississippi">Mississippi</li>
<li><input type = 'radio' name = 'options' value="Danube">Danube</li>`;


let  score = document.createElement('p');
score.innerText = 'Total score is 0'

quizDiv.append(quizText, answers, score);

mainDiv.appendChild(quizDiv);

answers.addEventListener('click', function (e) {
  let clickedItem = e.target.closest('li');
  // console.log(clickedItem)

  if (clickedItem && clickedItem.querySelector("input[type ='radio']")) {
    let selectedRadio = clickedItem.querySelector("input[type='radio']");
    console.log(selectedRadio);
    selectedRadio.checked = true;

    if (selectedRadio.value === 'Nile') {
      const correctAnswer = document.createElement('p');
      correctAnswer.innerText = 'Good job buddy! :)';
      correctAnswer.style.color = 'green'
      answers.appendChild(correctAnswer)
      score.innerHTML = `Total score is 1`
    } else {
      const wrongAnswer = document.createElement('p')
        wrongAnswer.innerText = 'Wrong answer, sorry :(';
        wrongAnswer.style.color = 'red'
        answers.appendChild(wrongAnswer)
        
    }
  }
});
