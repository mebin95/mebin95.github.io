
let availableLetters;
let lives;
let guessed;
let matched;
let guess;
let request;
let countMatched = 0;
let chosenWord;
let requestData;
let tempWord;

let requestURL = "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt";

request = new XMLHttpRequest();
request.open('GET', requestURL);
request.send();
request.onload = function () {

	requestData = request.response.split("\n");
	chosenWord = (requestData[Math.floor(Math.random() * requestData.length)].replace(/[!@#$%^&*()-=_+|;':",.<>?']/, "")).toUpperCase();
	console.log(chosenWord);

	availableLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	lives = 7;
	guessed = matched = "";
	document.getElementById("showWords").innerText += "-".repeat(chosenWord.length);
	document.getElementById("wordsInfo").textContent = "You have " + lives + " lives remaining.";


};

function submit() {

	guess = document.getElementById("searchTerm").value.toUpperCase();

	if (guess != "" && availableLetters.indexOf(guess) > -1) {

		if ((matched && matched.indexOf(guess) > -1) || guessed && guessed.indexOf(guess) > -1) {

			alert("You already chose that letter!");

		} else if (chosenWord.indexOf(guess) > -1) {





			for (let i = 0; i < chosenWord.length; i++) {

				//document.getElementById("showWords").remove();
				//document.getElementById("showWords").textContent += "_ ";

				if (chosenWord.charAt(i) === guess) {


					//document.getElementById("showWords").append(tempWord.charAt(i).replace("_", guess));
					countMatched++;
				} else {
					//document.getElementById("showWords").append(tempWord.charAt(i).replace("_"));
				}

			}

			console.log("Count Matched: " + countMatched);

			matched += guess;

			console.log("Matched : " + matched);

			if (countMatched === chosenWord.length) {
				alert("You Win");
			}
		} else {

			guessed += guess;

			lives--;

			document.getElementById("wordsInfo").textContent = "You have " + lives + " lives remaining";

			var canvas;
			var contedxt;

			setColor('#000000');
			setLineWidth(5);

			switch (lives) {
				case 6:
					drawGallows();
					break;

				case 5:
					drawHead();
					break;

				case 4:
					drawBody();
					break;

				case 3:
					drawRightHand();
					break;

				case 2:
					drawLeftHand();
					break;
				case 1:
					drawRightFoot();
					break;

				case 0:
					drawLeftFoot();
					//document.getElementById("showWords")
					break;
			}



			console.log("Guessed: " + guessed + " Lives Left: " + lives);


			let tempWord = document.getElementById("showWords").innerText;

			console.log(tempWord);

			for (let i = 0; i < matched.length; i++) {


				for (let j = 0; j < chosenWord.length; j++) {


					if (matched.charAt(i) == chosenWord.charAt(j)) {

						tempWord = tempWord.substring(0, j) + matched.charAt(i) + tempWord.substring(j + 1, tempWord.length);
						document.getElementById("showWords").innerText = tempWord;
					}



				}



			}






		}




	}
	document.getElementById("searchTerm").value = "";


}

$(document).ready(function () {
	canvas = $('#hangman')[0];
	context = canvas.getContext("2d");
});


function draw() {
	clearCanvas();
	setColor('#000000');
	setLineWidth(20);
	drawGallows();
	drawHead();
	drawBody();
	drawRightHand();
	drawLeftHand();
	drawRightFoot();
	drawLeftFoot();
}

function clearCanvas() {
	canvas.width = canvas.width;
}

function setColor(color) {
	context.strokeStyle = color;
}

function setLineWidth(width) {
	context.lineWidth = width;
}

function drawGallows() {
	context.beginPath();
	context.moveTo(350, 450);
	context.lineTo(10, 450);
	context.lineTo(70, 450);

	context.lineTo(70, 10);
	context.lineTo(200, 10);
	context.lineTo(200, 50);
	context.stroke();
}

function drawHead() {
	context.beginPath();
	context.arc(200, 100, 50, 0, Math.PI * 2, true);
	context.closePath();
	context.lineWidth = 4;
	context.stroke();
}

function drawBody() {
	context.beginPath();
	context.moveTo(200, 150);
	context.lineTo(200, 300);
	context.stroke();
}

function drawRightHand() {
	context.beginPath();
	context.moveTo(200, 170);
	context.lineTo(150, 250);
	context.stroke();
}

function drawLeftHand() {
	context.beginPath();
	context.moveTo(200, 170);
	context.lineTo(250, 250);
	context.stroke();
}

function drawRightFoot() {
	context.beginPath();
	context.moveTo(200, 300);
	context.lineTo(150, 380);
	context.stroke();
}

function drawLeftFoot() {
	context.beginPath();
	context.moveTo(200, 300);
	context.lineTo(250, 380);
	context.stroke();
}
