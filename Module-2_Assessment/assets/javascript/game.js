const guessedHTML = document.querySelector('#guessed')
const remain_guessHTML = document.querySelector('#remain_guess')

const validLetters = 'abcdefghijklmnopqrstuvwxyz';
const guessedLetters = [];
var remaining_guesses = 12;

document.addEventListener('keypress', function() {
    const key = event.key.toLowerCase();
    if (validLetters.includes(key) && !guessedLetters.includes(key) && remaining_guesses > 0) {
        guessedLetters.push(key); 
        const guessedString = guessedLetters.join(', ');
        guessedHTML.innerText = guessedString;
        remaining_guesses -= 1;
        remain_guessHTML.innerText = remaining_guesses;
    } else if (remaining_guesses === 0) {
        alert("Sorry, you are out of guesses, game over!")
    };
});

