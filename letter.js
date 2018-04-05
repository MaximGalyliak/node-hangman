class Letter {
    constructor(char){
        this.letter = char;
        this.isLetterGuessed = false;
    }
    checkLetter(arg){
        if(arg === this.letter){
            this.isLetterGuessed = true;
            return true;
        }
    }
    toString(){
        if(this.isLetterGuessed){
            return this.letter;
        }else{
            return '*';
        }
    }
}
module.exports = Letter;