function squareNumber(num) {
	return num * num;
}

function sum3Numbers(a,b,c) {
	return a + b + c;
}


var personObject = {
	name: "Mebin",
	age: 20,
	occupation: "Consultant"
}

personObject.name = "Adam";


function hello() {
	alert("Hello World!");
}

function changeAge() {
	personObject.age ++;;
}

function outputAge() {
	alert(personObject.age);
}

function createObject() {

	var name = document.getElementById('name').value;
	var age = document.getElementById('age').value;
	var occupation = document.getElementById('occupation').value;

	personObject.name = name,
	personObject.age = age,
	personObject.occupation = occupation

	alert("You made an Object - Name: " + personObject.name + " Age: " + personObject.age + " Occupation: " + personObject.occupation);

}

var string1 = " He said \"My name is Elliott\" ";



console.log(squareNumber(9));
console.log(sum3Numbers(1,2,3));

console.log(personObject.name);


console.log(personObject.age);


console.log(squareNumber(9));

console.log(string1.toUpperCase()); 


console.log(string1.toUpperCase().concat(5));



var cars = ["Saab", "Volvo", "BMW"];

console.log(cars);

cars.push("Benz");

console.log(cars);

cars.pop("Benz");

console.log(cars);

function checkObject() {
	if(personObject.age > 20 && personObject.age < 40) {
		console.log("They are between 20 & 40.");
	} else {
		console.log("They are not between 20 & 40.");
	}
}

checkObject();

function iterateTo100() {
	for (i = 1; i <= 100; i++) {
		if(i % 2 == 0) {
			console.log(i);
		}
	    
	}
}

iterateTo100();



