
var Letter = require("./Letter");

// selectedWord = "yoga";

//returns a string representing the word.  This should call the function on each letter object (func1) that displays the character or an underscore and concatenate those together.//
function Word(guess,unknownWord) {
	this.guess = guess;
	this.letterThere = false;
	// this.unknownLetter = unknownLetter;
	this.unknownWord = unknownWord;
	this.output={};


	this.letterPresent = function(){
		if (this.output.isPresent) {
			this.letterThere = true;
			console.log("Letter There: " + this.letterThere);
		}
	};

	this.buildWord = function(){
		console.log("UNKNOWN WORD ARRAY: " + this.unknownWord);
		for (var i=0; i<selectedWord.length; i++){
			correctLetter = selectedWord.charAt(i);
			var output = new Letter(guess);
			output.let();
			console.log("IS PRESENT: " + output.isPresent);
			// this.unknownWord.push(output.unknownLetter);
			if ((this.unknownWord[i] === " _ ") && (output.unknownLetter !== " _ ")) {
			this.unknownWord[i] = (output.unknownLetter);
		};
			this.letterPresent();
	
			console.log("From Word Constructor");
			console.log(this.unknownWord);
			console.log("Letter There: " + this.letterThere);

	

		};
		console.log("____________________");
		console.log(this.unknownWord.join(""));
	};



	};

//  var output = new Word("o");
//  console.log(output);
// console.log("_______________________");
// output.buildWord();
// console.log(output);

module.exports = Word;