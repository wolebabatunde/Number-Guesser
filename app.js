/* GAME FUNCTIONS :

- Player must be able to guess number from min to max
- Player get a certain amount of guesses 
- Notify Player of Guesses Left
- Notify Player of the correct answer if loose
- Let player choose to play again.

*/

// GAME VALUE

let min = 1,
    max = 10,
    winningNum = 7,
    guessesLeft = 3;


// GET UI
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


// ASSIGN UI MIN AND MAX
minNum.textContent = min;
maxNum.textContent = max;

// LISTEN FOR GUESS

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);
    // console.log(guess);

    // VALIDATE

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // CHECK IF WON
    if (guess === winningNum) {
        // DISABLE INPUT
        guessInput.disabled = true;
        // CHANGE BORDER COLOR TO GREEN
        guessInput.style.borderColor = 'green';
        // SET MESSAGE TO CORRECT NUMBER AND CHANGE COLOR
        setMessage(`${winningNum} is correct!, YOU WIN!`, 'green');
    } else {

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // DISABLE INPUT
            guessInput.disabled = true;

            // CHANGE BORDER COLOR TO RED
            guessInput.style.borderColor = 'red';

            // SET MESSAGE TO LOSE AND CHANGE COLOR TO RED

            setMessage(`Game over, YOU LOST, the correct answer is ${winningNum}`, 'red');

        } else {

            // REMIND THEM OF THE NUMBER LEFT AND CONTINUE

            setMessage(`${guess} is wrong, ${guessesLeft} guess left`)
        }
    }
})


// MESSAGE

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}