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
        gameOver(true, `${winningNum} is correct!, YOU WIN!`, 'green');

    } else {

        guessesLeft -= 1;

        if (guessesLeft === 0) {
            // DISABLE INPUT
            gameOver(false, `Game over, YOU LOST, the correct answer is ${winningNum}`, 'red');

        } else {

            // REMIND THEM OF THE NUMBER LEFT AND CONTINUE

            // BORDER RED

            guessInput.style.borderColor = 'red';

            // CLEAR INPUT

            guessInput.value = '';

            setMessage(`${guess} is wrong, ${guessesLeft} guess left`, 'red');
        }
    }
})

// GAME OVER FUNCTION

function gameOver(won, msg) {

    let color;

    won === true ? color = 'green' : color = 'red';

    // DISABLE INPUT
    guessInput.disabled = true;
    // CHANGE BORDER COLOR TO GREEN
    guessInput.style.borderColor = 'color';
    // SET MESSAGE TO CORRECT NUMBER AND CHANGE COLOR
    message.style.color = color;
    setMessage(msg);
}


// MESSAGE

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}