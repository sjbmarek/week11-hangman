
var Letter = require("./Letter");

function Word(guess,unknownWord) {
	this.guess = guess;
	this.letterThere = false;
	// this.unknownLetter = unknownLetter;
	this.unknownWord = unknownWord;
	this.output={};


	this.buildWord = function(){
		// console.log("UNKNOWN WORD ARRAY: " + this.unknownWord);
		for (var i=0; i<selectedWord.length; i++){
			correctLetter = selectedWord.charAt(i);
			var output = new Letter(guess);
			output.let();
			// console.log("IS PRESENT: " + output.isPresent);
			if(output.isPresent) {
				this.letterThere = true;
			}
			// this.unknownWord.push(output.unknownLetter);
			if ((this.unknownWord[i] === "_") && (output.unknownLetter !== "_")) {
				this.unknownWord[i] = (output.unknownLetter);
			};
		};
	};
};


module.exports = Word;