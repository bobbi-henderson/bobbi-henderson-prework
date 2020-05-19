const gamePieces = {
    characters: [{name: 'Spider-Man', image: 'assets/images/spiderman.jpg'}, {name: 'Iron Man', image: 'assets/images/ironman.jpg'}, 
                    {name:'Deadpool', image: 'assets/images/deadpool.jpg'}, {name:'Captain America', image: 'assets/images/captain-america.jpg'},
                    {name: 'Black Widow', image: 'assets/images/black-widow.jpg'}, {name: 'The Hulk', image: 'assets/images/the-hulk.jpeg'}, 
                    {name: 'Scarlet Witch', image: 'assets/images/scarlet-witch.jpg'}, {name: 'Thor', image: 'assets/images/thor.jpg'},
                    {name: 'Hawkeye', image: 'assets/images/hawkeye.jpg'}, {name: 'Ant-Man', image: 'assets/images/ant-man.jpg'},
                    {name: 'Star-Lord', image: 'assets/images/star-lord.jpg'}, {name: 'Groot', image: 'assets/images/groot.jpg'},
                    {name: 'Rocket', image: 'assets/images/rocket.jpg'}, {name: 'Black Panther', image: 'assets/images/black-panther.jpg'},
                    {name: 'Doctor Strange', image: 'assets/images/doctor-strange.jpg'}, {name: 'Vision', image: 'assets/images/vision.jpg'}, 
                    {name: 'Gamora', image: 'assets/images/gamora.jpg'}, {name: 'Loki', image: 'assets/images/loki.jpg'}, 
                    {name: 'The Winter Soldier', image: 'assets/images/winter-soldier.jpg'}, {name: 'War Machine', image: 'assets/images/war-machine.jpg'}, 
                    {name: 'Falcon', image: 'assets/images/falcon.jpg'}, {name: 'Thanos', image: 'assets/images/thanos.jpg'}, 
                    {name: 'Drax the Destroyer', image: 'assets/images/drax.jpg'}, {name: 'Mantis', image: 'assets/images/mantis.jpg'}, 
                    {name: 'Nebula', image: 'assets/images/nebula.jpg'}, {name: 'Wolverine', image: 'assets/images/wolverine.jpg'}, 
                    {name: 'Professor X', image: 'assets/images/professor-x.jpg'}, {name: 'Magneto', image: 'assets/images/magneto.jpg'}, 
                    {name: 'Cyclops', image: 'assets/images/cyclops.jpg'}, {name: 'Human Torch', image: 'assets/images/human-torch.jpg'}, 
                    {name: 'Quicksilver', image: 'assets/images/quicksilver.jpg'}, {name: 'The Wasp', image: 'assets/images/the-wasp.jpg'}, 
                    {name: 'Silver Surfer', image: 'assets/images/silver-surfer.jpg'}, {name: 'Rogue', image: 'assets/images/rogue.jpg'}, 
                    {name: 'Captain Marvel', image: 'assets/images/captain-marvel.jpg'}, {name: 'Mr. Fantastic', image: 'assets/images/mr-fantastic.jpg'}, 
                    {name: 'Doctor Doom', image: 'assets/images/doctor-doom.jpg'}, {name: 'Mysterio', image: 'assets/images/mysterio.jpg'}, 
                    {name: 'Invisible Woman', image: 'assets/images/invisible-woman.jpg'}, {name: 'Thing', image: 'assets/images/thing.jpg'}, 
                    {name: 'Negasonic Teenage Warhead', image: 'assets/images/negasonic.jpg'}, {name: 'Erik Killmonger', image: 'assets/images/killmonger.jpg'}, 
                    {name: 'Nick Fury', image: 'assets/images/nick-fury.jpg'}, {name: 'Daredevil', image: 'assets/images/daredevil.jpg'}
                ],
    guessedHTML: document.querySelector('#guessed'),
    remain_guessHTML: document.querySelector('#remain_guess'),
    characterHTML: document.querySelector('#character'),
    winsHTML: document.querySelector('#wins'),
    imageHTML: document.querySelector('#answer_img'),
    answerHTML: document.querySelector('#answer'),
    validLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    guessedLetters: [],
    remaining_guesses: 6,
    wins: 0,
    newCharacter: {},
    hiddenLetters: [],
    randomCharacter: function() {
        return this.characters[Math.floor(Math.random() * this.characters.length)]
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
        const currentName = gamePieces.newCharacter.name.toUpperCase();
        for (let i=0; i<currentName.length; i++) {
            if(gamePieces.validLetters.includes(currentName[i])) {
                gamePieces.hiddenLetters.push('_');
            } else {
                gamePieces.hiddenLetters.push(currentName[i]);
            }
        };
        const hiddenCharacter = gamePieces.hiddenLetters.join('  ');
        gamePieces.characterHTML.innerText = hiddenCharacter;  
    },
    guess: function(key) {
        gamePieces.guessedLetters.push(key); 
        const guessedString = gamePieces.guessedLetters.join(' ');
        gamePieces.guessedHTML.innerText = guessedString;
        const currentName = gamePieces.newCharacter.name.toUpperCase();
        if (currentName.includes(key)) {
            for(let i=0; i<currentName.length; i++) {
                if (currentName[i] === key) {
                    gamePieces.hiddenLetters[i] = currentName[i];
                };
            };
            const hiddenCharacter = gamePieces.hiddenLetters.join(' ');
            gamePieces.characterHTML.innerText = hiddenCharacter;
            if (!gamePieces.hiddenLetters.includes('_')) {
                gamePieces.answerHTML.innerText = `CONGRATULATIONS! ${currentName} IS CORRECT!`;
                gamePieces.imageHTML.src = gamePieces.newCharacter.image;
                gamePieces.wins++;
                gamePieces.winsHTML.innerText = gamePieces.wins;
                this.newGame();
            };
        } else if (gamePieces.remaining_guesses > 1) {
        gamePieces.remaining_guesses -= 1;
        gamePieces.remain_guessHTML.innerText = gamePieces.remaining_guesses;
        } else {
            gamePieces.answerHTML.innerText = `SORRY, YOU ARE OUT OF GUESSES, THE CORRECT ANSWER WAS ${gamePieces.newCharacter.name.toUpperCase()}!`;
            gamePieces.imageHTML.src = gamePieces.newCharacter.image;
            game.newGame()
        }
        ;
    },
}

// const imageHTML = document.querySelector('#answer_img')
// imageHTML.src = gamePieces.characters[0].image
game.newGame()


document.addEventListener('keypress', function() {
    const key = event.key.toUpperCase();
    if (gamePieces.validLetters.includes(key) && !gamePieces.guessedLetters.includes(key) && gamePieces.remaining_guesses > 0) {
        game.guess(key);
    };
});

