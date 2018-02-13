
var inquirer = require("inquirer");
var Word = require("./Word");



targetWords = ["yoga", "samadhi", "asana", "namaste", "practice", "meditation"];
guessesLeft = 10;
selectedWord = targetWords[Math.floor(Math.random() * targetWords.length)];
console.log (selectedWord);
var unknownWord=[];
var testletter = "";

inquirer.prompt([
{
	type: "list",
	message: "Play Hangman?",
	choices: ["yes", "no"],
	name: "play"
}
])
.then(function(inquirerResponse) {
	if (inquirerResponse.play === "no") {
		return
	}else
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
		var output = new Word(testletter);
		console.log("********************");
		output.buildWord();
		console.log(output);





	});

	
})