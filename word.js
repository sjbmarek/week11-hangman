
var Letter = require("./Letter");

// selectedWord = "yoga";

//returns a string representing the word.  This should call the function on each letter object (func1) that displays the character or an underscore and concatenate those together.//
function Word(guess) {
	this.guess = guess;
	// this.unknownLetter = unknownLetter;
	this.unknownWord = [];
	this.buildWord = function(){
		for (var i=0; i<selectedWord.length; i++){
			correctLetter = selectedWord.charAt(i);
			var output = new Letter(guess);
			output.let();
			this.unknownWord.push(output.unknownLetter);
			console.log("From Word Constructor");
			console.log(this.unknownWord);

		};
		console.log("____________________");
		console.log(this.unknownWord.join(""));
	};

	//takes a character as an argument and calls the guess func2 on each letter object//
	// this.func4 = function(guess){
	// 	Letter().func2(guess);

	// };
	

//takes a character as an argument and calls the guess func2 on each letter object//
// this.func3();
// this.func4();
};

//  var output = new Word("o");
//  console.log(output);
// console.log("_______________________");
// output.buildWord();
// console.log(output);

module.exports = Word;