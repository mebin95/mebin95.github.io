
function iterate3(limit, fizzWord, buzzWord) {
	for (i = 1; i <= limit; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			console.log(i + "FizzBuzz");
		}
		else if (i % 3 == 0) {
			console.log(i + " " + fizzWord);
		}
		else if (i % 5 == 0) {
			console.log(i + " " + buzzWord);
		}

	}
}

iterate3(10, "Three", "Five");


function iterate4(number) {

	var count = 0;

	while (number != 1) {

		if (number % 3 === 0) {
			number = number / 3;
			console.log(number);
			count++;
			console.log("Iteration: " + count);
		} else {

			if ((number + 1) % 3 == 0) {
				number = (number + 1) / 3;
				console.log(number);
				count++;
				console.log("Iteration: " + count);
			}

			else if ((number - 1) % 3 == 0) {
				number = (number - 1) / 3;
				console.log(number);
				count++;
				console.log("Iteration: " + count);
			}
		}

	}

}



iterate4(100);


function findTriple(inputString) {

	var count = 0;

	for (var i = 0; i < inputString.length - 2; i++) {
		var currentString = inputString.charAt(i);
		var string2 = inputString.charAt(i + 1);
		var string3 = inputString.charAt(i + 2);

		if (currentString === string2 && currentString === string3) {
			count++;
		}

		console.log(count);
	}
}


findTriple("aaabbbcccc");


function createPtag() {
	document.getElementById("addP").innerHTML = "<p id=\"pText\"></p>";
}

function addText() {
	var value = document.getElementById("pTag").value;
	console.log(value);
	document.getElementById("pText").innerHTML = value;
}

function devarePtag() {
	document.getElementById("pText").remove();
}

function getJSON() {
	var requestURL = document.getElementById("JSONurl").value;

	var request = new XMLHttpRequest();
	request.open('GET', requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function () {
		var requestData = request.response;

		var p1 = document.createElement('p');
		var p2 = document.createElement('p');
		var p3 = document.createElement('p');
		var p4 = document.createElement('p');
		var p5 = document.createElement('p');


		p1.textContent = requestData.squadName;
		p2.textContent = requestData.homeTown;
		p3.textContent = requestData.formed;
		p4.textContent = requestData.secretBase;
		p5.textContent = requestData.active;

		var obj = requestData.members;

		document.getElementById("jsonContent").append(p1, p2, p3, p4, p5);

		for (var i = 0; i < obj.length; i++) {

			var p6 = document.createElement('p');
			var p7 = document.createElement('p');
			var p8 = document.createElement('p');
			var p9 = document.createElement('p');
			p6.textContent = obj[i].name;
			p7.textContent = obj[i].age;
			p8.textContent = obj[i].secretIdentity;
			p9.textContent = obj[i].powers;

			document.getElementById("jsonContent").append(p6, p7, p8, p9);

		}

	};
}



function searchTerm() {
	var requestURL = document.getElementById("JSONsearch").value;

	var request = new XMLHttpRequest();
	request.open('GET', requestURL); request.responseType = 'json';
	request.send();
	request.onload = function () {

		var search = document.getElementById("search").value.toLowerCase();
		var requestData = request.response;
		var count = 0;

		document.getElementById("jsonCount").remove();
		document.getElementById("jsonSearch").remove();

		var div = document.createElement('div');
		div.setAttribute("id", "jsonSearch");

		var divCount = document.createElement('div');
		divCount.setAttribute("id", "jsonCount");
		divCount.setAttribute("style", "font-weight: bold;");

		document.getElementById("jsonParent").append(divCount, div);

		for (var i = 0; i < requestData.length; i++) {

			var p1 = document.createElement('p');
			var p2 = document.createElement('p');
			var p3 = document.createElement('p');
			var p4 = document.createElement('p');
			var p5 = document.createElement('br');
			var countTotal = document.createElement('p');

			var found = false;

			if (requestData[i].nm.toLowerCase().includes(search)) {

				found = true;

			}

			if (requestData[i].cty.toLowerCase().includes(search)) {

				found = true;

			}

			if (requestData[i].hse.toLowerCase().includes(search)) {

				found = true;

			}

			if (requestData[i].yrs.toLowerCase().includes(search)) {

				found = true;

			}

			if (found) {
				count++;
				p1.textContent = "Name :" + requestData[i].nm;
				p2.textContent = "City :" + requestData[i].cty;
				p3.textContent = "House :" + requestData[i].hse;
				p4.textContent = "Years :" + requestData[i].yrs + "\n";
				document.getElementById("jsonSearch").append(p1, p2, p3, p4, p5);
			}

			if (count > 0 && requestData.length - 1 == i) {
				console.log(i);
				countTotal.textContent = "Found " + count + " records";
				document.getElementById("jsonCount").append(countTotal);
			}

		}

		if (count === 0) {
			document.getElementById("jsonSearch").append("Did not find any records sorry!");
		}

	};
}








