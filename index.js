
var inquirer = require("inquirer");
var Word = require("./Word");



targetWords = ["yoga", "samadhi", "asana", "namaste", "practice", "meditation"];
guessesLeft = 10;
selectedWord = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log (selectedWord);
var unknownWord=[];
var testletter = "";
buildBlankWord = function(){
		for (var i=0; i<selectedWord.length; i++){
			unknownWord.push(" _ ");
		};
		console.log(unknownWord.join(""));
	}


inquirer.prompt([
{
	type: "list",
	message: "Play Hangman?",
	choices: ["yes", "no"],
	name: "play"
}
])
.then(function(inquirerResponse) {
	buildBlankWord();

	var playGame = function() {

	if (inquirerResponse.play === "yes" && guessesLeft>0) {



		inquirer.prompt([
		{
			type: "input",
			message: "Guess a Letter: ",
			name: "guess"
		}
		])
		.then(function(inquirerResponse) {
			testletter = inquirerResponse.guess;
			console.log("You Guessed: " + testletter);
			var output = new Word(testletter,unknownWord);
			console.log("********************");
			output.buildWord();
			console.log(output);
			console.log("88888888888888888888888");
			unknownWord=output.unknownWord;
			console.log(unknownWord.join(""));


			guessesLeft--;
			console.log("Guesses Left: " + guessesLeft);

			playGame();



		});
	}
	else {
		console.log("Goodbye and good karma!");
		return;
	}

	};

	playGame();
	// };
	// };
// };


})
