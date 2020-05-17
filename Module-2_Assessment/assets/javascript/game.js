const characters = ['Spider-Man', 'Iron Man', 'Deadpool', 'Captain America', 'Black Widow',
                    'The Hulk', 'Scarlet Witch', 'Thor', 'Hawkeye', 'Ant-Man', 'Star-Lord',
                    'Groot', 'Rocket', 'Black Panther', 'Doctor Strange', 'Vision', 'Gamora',
                    'Loki', 'The Winter Soldier', 'War Machine', 'Falcon', 'Thanos', 'Drax the Destroyer',
                    'Mantis', 'Nebula', 'Wolverine', 'Professor X', 'Magneto', 'Cyclops', 
                    'Human Torch', 'Quicksilver', 'The Wasp', 'Silver Surfer', 'Rogue', 
                    'Captain Marvel', 'Mr. Fantastic', 'Doctor Doom', 'Mysterio', 'Invisible Woman',
                    'Thing', 'Negasonic Teenage Warhead', 'Erik Killmonger', 'Nick Fury', 'Daredevil',
                    'Gambit', 'Luke Cage', 'Jessica Jones', 'Iron Fist', 'Punisher', 'NightCrawler',
                    'Ghost Rider'
                ]

const guessedHTML = document.querySelector('#guessed')
const remain_guessHTML = document.querySelector('#remain_guess')
const characterHTML = document.querySelector('#character')
const winsHTML = document.querySelector('#wins')

const validLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const guessedLetters = [];
var remaining_guesses = 6;
const randomCharacter = characters[Math.floor(Math.random() * characters.length)].toUpperCase();
const hiddenLetters = [];
for (let i=0; i<randomCharacter.length; i++) {
    if(validLetters.includes(randomCharacter[i])) {
        hiddenLetters.push('_');
    } else {
        hiddenLetters.push(randomCharacter[i]);
    }
};
const hiddenCharacter = hiddenLetters.join('  ');
characterHTML.innerText = hiddenCharacter;
console.log(hiddenCharacter)
var wins = 0;

document.addEventListener('keypress', function() {
    const key = event.key.toUpperCase();
    if (validLetters.includes(key) && !guessedLetters.includes(key) && remaining_guesses > 0) {
        guessedLetters.push(key); 
        const guessedString = guessedLetters.join(' ');
        guessedHTML.innerText = guessedString;
        if (randomCharacter.includes(key)) {
            for(let i=0; i<randomCharacter.length; i++) {
                if (randomCharacter[i] === key) {
                    hiddenLetters[i] = randomCharacter[i];
                };
            };
            const hiddenCharacter = hiddenLetters.join(' ');
            characterHTML.innerText = hiddenCharacter;
            if (!hiddenCharacter.includes('_')) {
                alert(`CONGRATULATIONS! ${randomCharacter} IS CORRECT!`);
                wins++;
                winsHTML.innerText = wins;
            }
        } else {
            remaining_guesses -= 1;
            remain_guessHTML.innerText = remaining_guesses;
        }
    } else if (remaining_guesses === 0) {
        alert(`SORRY, YOU ARE OUT OF GUESSES, THE CORRECT ANSWER WAS ${randomCharacter}!`)
    };
});

