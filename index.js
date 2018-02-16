
var inquirer = require("inquirer");
var Word = require("./Word");
targetWords = ["yoga", "samadhi", "asana", "namaste", "practice", "meditation"];
guessesLeft = 10;
selectedWord = targetWords[Math.floor(Math.random() * targetWords.length)];
// console.log (selectedWord +"\n\n");
var unknownWord=[];
var testletter = "";


buildBlankWord = function(){
	for (var i=0; i<selectedWord.length; i++){
		unknownWord.push("_");
	};
	console.log("\n" + unknownWord.join(" ") + "\n");
}

wordFinished = function(){
	finished = true;
	for (var i=0; i<selectedWord.length; i++){
		if(unknownWord[i] === "_"){
			finished = false;
		};
	};
	if (guessesLeft === 0){
		console.log("GAME OVER.\n");
		console.log("The word was: " + selectedWord + "\n");  
		console.log("Ctrl C to start over.\n");
	};
	if(finished){
		console.log("CORRECT!!\n");  
		console.log("Ctrl C to start over.\n");
			// playGame(); recursion start??
	};
}


	inquirer.prompt([
	{
		type: "list",
		message: "\nWelcome to Prana Hangman!  Would you like to play?\n",
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
					console.log("\nYou Selected: " + testletter + "\n");
					var output = new Word(testletter,unknownWord);
					output.buildWord();
					// console.log(output);
					// console.log(output.letterThere);
					if (!output.letterThere){
						guessesLeft--;
						console.log("INCORRECT GUESS\n");
						console.log("Incorrect selections remaining: " + guessesLeft + "\n");
					};
					unknownWord=output.unknownWord;
					console.log(unknownWord.join(" ") + "\n");
					wordFinished();
					playGame();

				});
			}
			else {
				console.log("Goodbye and good karma!");
				return;
			}

		};
		buildBlankWord();
		playGame();
	})
