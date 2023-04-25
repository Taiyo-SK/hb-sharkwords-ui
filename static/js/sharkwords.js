const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';

const WORDS = [
  'strawberry',
  'orange',
  'apple',
  'banana',
  'pineapple',
  'kiwi',
  'peach',
  'pecan',
  'eggplant',
  'durian',
  'peanut',
  'chocolate',
];

const numWrong = 0;

// Loop over the letters in `word` and create divs.
// The divs should be appended to the section with id="word-container".
//
// Use the following template string to create each div:
// `<div class="letter-box ${letter}"></div>`
//
const createDivsForChars = (word) => {
  const container = document.querySelector('#word-container');
  
  for (const letter of word) {
    container.insertAdjacentHTML('beforeend', `<div class="letter-box ${letter}"></div>`);
  } 
};

// Loop over each letter in the alphabet and generate a button for each letter
// The buttons should be appended to the section with id="letter-buttons".
const generateLetterButtons = () => {
  // Replace this with your code
  const btn = document.querySelector('#letter-buttons');
 
  for (const letter of ALPHABET) {
    const button = document.createElement('button');
    button.innerHTML = letter; 
    btn.insertAdjacentElement('beforeend', button);
  }
};

// Set the `disabled` property of `buttonEl` to true.
//
// `buttonEl` is an `HTMLElement` object.
//
const disableLetterButton = (buttonEl) => {
  // for letter button in buttons, 
  buttonEl.addEventListener("click", (event) => {
    event.preventDefault();
    event.target.disabled = true;
  });
};
// const buttons = document.getElementById('letter-buttons').querySelectorAll('button'); // selects the first button, 'a'
//   for (const button of buttons) {
//     button.addEventListener("click", (event) => {
//       event.preventDefault();
//       console.log(event.target);
//       event.target.disabled = true;
//       });
//   }
const buttonA = document.querySelector('#letter-buttons'); // selects the first button, 'a'
disableLetterButton(buttonA);

// This is a helper function we will use in the future
// It should return `true` if `letter` is in the word
// For now, you should test it out to make sure it works

const isLetterInWord = (letter, word) => {
  
  for (let wordLetter of word) {
    if (letter === wordLetter) {
      return true;
    }
  }
  return false;
};

// This is like if __name__ == '__main__' in Python
// It will be called when the file is run (because
// we call the function on line 66)
(function startGame() {
  // For now, we'll hardcode the word that the user has to guess
  // You can change this to choose a random word from WORDS once you
  // finish this lab but we hard code it so we know what the word is
  // and can tell if things look correct for this word
  let index = Math.floor(Math.random()* WORDS.length); 
  
  createDivsForChars(WORDS[index]);

  generateLetterButtons();

  // in the next lab, you will be adding functionality to handle when
  // someone clicks on a letter
})();
