class Letter {
    constructor(char){
        this.letter = char;
        this.isLetterGuessed = false;
    }
    checkLetter(arg){
        if(arg === this.letter){
            return  this.isLetterGuessed = true;  
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