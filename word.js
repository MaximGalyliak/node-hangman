const Letter = require('./letter');

class Word {
    constructor(object) {
        this.question = object.question;
        this.word = [];
        this.isWordGuessed = false;
        for (var letter in object.answer) {
            this.word.push(new Letter(object.answer[letter]));
        }
    }
    checkIfGuessed() {
        let gCounter = 0;
        this.word.map(el => { if (el.isLetterGuessed) { gCounter++; } });
        if (gCounter == this.word.length) {
            this.isWordGuessed = true;
        }
    }
    printQuestion() {
        console.log(this.question);
    }

    printWord() {
        let string = ''
        this.word.map(letter => {
            string += letter + ' ';
        });
        console.log(string);
    }
    checkInWord(arg) {
        var inWord = false;
        this.word.map(element => {
            if (element.checkLetter(arg)) {
                inWord = true;
            };
        });
        return inWord;
    }
}
module.exports = Word;
