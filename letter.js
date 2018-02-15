// var correctLetter = "k";


function Letter(guess) {
	this.unknownLetter = "_",
	this.guess = guess;
	this.isPresent = false;
	// console.log("Guess: " + guess);
	// console.log("Correct Letter: " + correctLetter);
	//returns underlying character if the letter has been guessed or underscore if it has not been guessed//
	this.let = function(guess){
			if(this.guess === correctLetter) {
				this.unknownLetter = this.guess;
				this.isPresent = true;
			};
			// console.log("Unknown Letter .let: " + this.unknownLetter);
			// console.log("Match .let: " + this.isPresent);
	};
};

// var output = new Letter("k");
// console.log(output);
// console.log("_______________________")
// output.let();
// console.log(output);



module.exports = Letter;