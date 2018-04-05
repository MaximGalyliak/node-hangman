const WordClass = require('./word');
const QA = require('./qabase');
const Prompt = require('prompt');

/////////////////////////////////////////////////////////////////////////////

var tries = 10;
Prompt.start();
gameLoop();

/////////////////////////////////////////////////////////////////////////////

function gameLoop() {
    var word = new WordClass(QA[Math.floor(Math.random() * QA.length)]);
    word.printQuestion();
    gameRound(word);
}

function gameRound(word) {
    Prompt.get([{
        name: 'guess',
        required: true,
        pattern: /^[a-z]+$/,
        message: 'Must be lower case letter!',
        before: (value) => { return value[0] }
    }], (err, result) => {
        if (word.checkInWord(result.guess)) {
            console.log('CORRECT!');
        } else {
            tries--;
            console.log('INCORECT!');
        };
        word.printWord();
        console.log('TRIES:', tries);
        if (tries > 0) {
            word.checkIfGuessed();
            if (!word.isWordGuessed) {
                gameRound(word);
            } else {
                console.log('You won!');
                gameLoop();
            }

        } else {
            console.log('You lost!');
        }
    });
}