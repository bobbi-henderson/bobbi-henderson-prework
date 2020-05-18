const gamePieces = {
    characters: ['Spider-Man', 'Iron Man', 'Deadpool', 'Captain America', 'Black Widow',
                    'The Hulk', 'Scarlet Witch', 'Thor', 'Hawkeye', 'Ant-Man', 'Star-Lord',
                    'Groot', 'Rocket', 'Black Panther', 'Doctor Strange', 'Vision', 'Gamora',
                    'Loki', 'The Winter Soldier', 'War Machine', 'Falcon', 'Thanos', 'Drax the Destroyer',
                    'Mantis', 'Nebula', 'Wolverine', 'Professor X', 'Magneto', 'Cyclops', 
                    'Human Torch', 'Quicksilver', 'The Wasp', 'Silver Surfer', 'Rogue', 
                    'Captain Marvel', 'Mr. Fantastic', 'Doctor Doom', 'Mysterio', 'Invisible Woman',
                    'Thing', 'Negasonic Teenage Warhead', 'Erik Killmonger', 'Nick Fury', 'Daredevil',
                    'Gambit', 'Luke Cage', 'Jessica Jones', 'Iron Fist', 'Punisher', 'NightCrawler',
                    'Ghost Rider'
                ],
    guessedHTML: document.querySelector('#guessed'),
    remain_guessHTML: document.querySelector('#remain_guess'),
    characterHTML: document.querySelector('#character'),
    winsHTML: document.querySelector('#wins'),
    validLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    guessedLetters: [],
    remaining_guesses: 6,
    wins: 0,
    newCharacter: '',
    hiddenLetters: [],
    randomCharacter: function() {
        return this.characters[Math.floor(Math.random() * this.characters.length)].toUpperCase();
    },
}

const game = {
    newGame: function () {
        gamePieces.guessedLetters = [];
        gamePieces.guessedHTML.innerText = gamePieces.guessedLetters;
        gamePieces.remaining_guesses = 6;
        gamePieces.remain_guessHTML.innerText = gamePieces.remaining_guesses;
        gamePieces.newCharacter = gamePieces.randomCharacter();
        gamePieces.hiddenLetters = [];
        for (let i=0; i<gamePieces.newCharacter.length; i++) {
            if(gamePieces.validLetters.includes(gamePieces.newCharacter[i])) {
                gamePieces.hiddenLetters.push('_');
            } else {
                gamePieces.hiddenLetters.push(gamePieces.newCharacter[i]);
            }
        };
        const hiddenCharacter = gamePieces.hiddenLetters.join('  ');
        gamePieces.characterHTML.innerText = hiddenCharacter;  
    },
    guess: function(key) {
        gamePieces.guessedLetters.push(key); 
        const guessedString = gamePieces.guessedLetters.join(' ');
        gamePieces.guessedHTML.innerText = guessedString;
        if (gamePieces.newCharacter.includes(key)) {
            for(let i=0; i<gamePieces.newCharacter.length; i++) {
                if (gamePieces.newCharacter[i] === key) {
                    gamePieces.hiddenLetters[i] = gamePieces.newCharacter[i];
                };
            };
            const hiddenCharacter = gamePieces.hiddenLetters.join(' ');
            gamePieces.characterHTML.innerText = hiddenCharacter;
            if (!gamePieces.hiddenLetters.includes('_')) {
                alert(`CONGRATULATIONS! ${gamePieces.newCharacter} IS CORRECT!`);
                gamePieces.wins++;
                gamePieces.winsHTML.innerText = gamePieces.wins;
                this.newGame();
            };
        } else {
        gamePieces.remaining_guesses -= 1;
        gamePieces.remain_guessHTML.innerText = gamePieces.remaining_guesses;
        };
    },
}

game.newGame()


document.addEventListener('keypress', function() {
    const key = event.key.toUpperCase();
    if (gamePieces.validLetters.includes(key) && !gamePieces.guessedLetters.includes(key) && gamePieces.remaining_guesses > 0) {
        game.guess(key);
    } else if (gamePieces.remaining_guesses === 0) {
        alert(`SORRY, YOU ARE OUT OF GUESSES, THE CORRECT ANSWER WAS ${gamePieces.newCharacter}!`)
        game.newGame()
    };
});

