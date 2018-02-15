
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
	wordFinished = function(){
		finished = true;
		for (var i=0; i<selectedWord.length; i++){
			if(unknownWord[i] === " _ "){
				finished = false;
				console.log("WORD FINISHED?");
			};
			if(finished){
				console.log("CORRECT!!");
			};
		};
	}


inquirer.prompt([
{
	type: "list",
	message: "Welcome to Prana Hangman!  Would you like to play?",
	choices: ["yes", "no"],
	name: "play"
}
])
.then(function(inquirerResponse) {
	

	var playGame = function() {

	if (inquirerResponse.play === "yes" && guessesLeft>0) {


		inquirer.prompt([
		{
			type: "input",
			message: "Select a Letter: ",
			name: "guess"
		}
		])
		.then(function(inquirerResponse) {
			testletter = inquirerResponse.guess;
			console.log("You Selected: " + testletter);
			var output = new Word(testletter,unknownWord);
			// console.log("********************");
			output.buildWord();
			// console.log(output);
			// console.log("88888888888888888888888");
			unknownWord=output.unknownWord;
			console.log(unknownWord.join(" "));


			guessesLeft--;
			console.log("Selections remaining: " + guessesLeft);

			playGame();
			wordFinished();


		});
	}
	else {
		console.log("Goodbye and good karma!");
		return;
	}

	};
	buildBlankWord();
	playGame();
	// };
	// };
// };


})
