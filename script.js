//BUTTONS
const buttonA = document.querySelector('#button_A');
//const buttonB= document.querySelectorAll('.button_B');
//const buttonC = document.querySelector('#button_C');

const txt = document.querySelector('#buttonMachine');
const headingA = document.querySelector('#heading_A');

function buttonAGotClicked() {
  const name = prompt('Thanks for saying Hi! What is your name?');
  alert(`Hello ${name}, nice to see you!`);
  headingA.textContent = `Welcome ${name}`;
};

function buttonBGotClicked() {
  const para = document.createElement('clickedButtonB');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
};


function buttonCGotClicked() {
  if (buttonC.textContent === 'Start machine') {
    buttonC.textContent = 'Stop machine';
    txt.textContent = 'The machine has started!';
  } else {
    buttonC.textContent = 'Start machine';
    txt.textContent = 'The machine is stopped.';
  }
};



buttonA.addEventListener('click', buttonAGotClicked);
//buttonB.addEventListener('click', buttonBGotClicked);
//buttonC.addEventListener('click', buttonCGotClicked);

//Guessing game
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  };
  
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!';
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high!';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

//places cursor in the input field immediately
guessField.focus();
