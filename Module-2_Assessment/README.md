# Marvel Hangman Game

A simple website where you can play a Marvel Character themed Hangman game.

## Prerequisites

* [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/download/)
* [JavaScript](https://www.javascript.com/)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Instructions

* Download the files from [the Module-2_Assessment folder](https://github.com/bobbilynn93/bobbi-henderson-prework/tree/master/Module-2_Assessment).

* Move all of the files into the folder of your choosing.

* Open index.html in a web browser to start playing.

## How It Works

* Using a predetermined array of Marvel characters, and the built in math object,
JavaScript with pick a character at random.

* JavaScript will then loop through the Marvel characters name and create a string that hides all of the letters in the name.

* With a keystroke listener, Javascript logs the key under the guessed character string, and also checks to see if the key that is pressed matches a letter a hidden letter in the string.

* If it finds a match, it updates the hidden string to show the correctly guessed letters. If there is no match, the letter logged, but there will be no change to the hidden string. Either way, a guess is deducted.

* If you completely unveil the character's name before you run out of guesses, JavaScript with play the Marvel theme, and congratulate you. Alternatively, if you are unable to unveil the character's name before you run out of guesses, you will hear a buzzer sound, and a losing message will be displayed revealing the character's name. Either outcome updates the picture being displayed to be a picture of the character.

* Once either a winning or losing sequence is started, the game will automatically pick a new character at random for the user to start guessing again.

## Authors

* Bobbi Henderson

## Acknowledgments

* Marvel Comics/Marvel Entertainment
* The Walt Disney Company
