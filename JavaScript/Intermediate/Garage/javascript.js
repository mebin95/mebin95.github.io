class Garage {

	constructor() {

		this.listOfVehicles = [];

	}


	addVehicle(Car) {

		this.listOfVehicles.push(Car);

	}

}

class Car {

	constructor(make, model, reg, cost, faults) {

		this.make = make;
		this.model = model;
		this.reg = reg;
		this.cost = cost;
		this.faults = faults;

	}


}


//let c2 = new Car("BMW", "3 Series", "MK55DSP", 33500, "none");



let qa = new Garage();

//console.log(qa.listOfVehicles[0].make);
function hide() {
	// if (qa.listOfVehicles.length === 0) {
	// 	document.getElementById("parentTb").style.display = "none";
	// 	document.getElementById("tb").innerHTML = "No Vehicles In the Garage!";
	// 	console.log("YES");
	// }
}

function getVehicleData() {

	let make = document.getElementById("make").value;
	let model = document.getElementById("model").value;
	let reg = document.getElementById("engine").value;
	let cost = document.getElementById("cost").value;
	let faults = document.getElementById("faults").value;

	if (make != "" && model != "" && reg != "" && cost != "") {
		addToGarage(make, model, reg, cost, faults);

		displayVehicle();
		console.log(qa.listOfVehicles);
	} else {
		alert("Please enter all the values");
	}



}

function addToGarage(make, model, reg, cost, faults) {

	let c1 = new Car(make, model, reg, cost, faults);
	qa.addVehicle(c1);

}

function removeVehicle(index) {
	qa.listOfVehicles.splice(index, 1);
	document.getElementById("listTr" + index).remove();
	console.log(qa.listOfVehicles);
}

function costOfFix(a) {

	let baseCost = qa.listOfVehicles[a].cost * 0.06;
	let knownFault = qa.listOfVehicles[a].faults;

	if (knownFault == "Yes") {
		return Math.round((baseCost * 2) * 100) / 100 + 50;
	} else {
		return 0;
	}

}

function displayVehicle() {

	let lastelement = qa.listOfVehicles.length - 1;

	let tr = document.createElement('tr');
	tr.setAttribute("id", "listTr" + lastelement);
	let td1 = document.createElement('td');
	let td2 = document.createElement('td');
	let td3 = document.createElement('td');
	let td4 = document.createElement('td');
	let td5 = document.createElement('td');
	let td6 = document.createElement('td');
	td6.setAttribute("style", "text-align: center;");

	let td7 = document.createElement('td');
	td6.setAttribute("style", "text-align: center;");

	td1.textContent = qa.listOfVehicles[lastelement].make;
	td2.textContent = qa.listOfVehicles[lastelement].model;
	td3.textContent = qa.listOfVehicles[lastelement].reg;
	td4.textContent = qa.listOfVehicles[lastelement].cost;
	td5.textContent = qa.listOfVehicles[lastelement].faults;
	td6.innerHTML = '<a class="btn btn-flat" onClick="removeVehicle(' + lastelement + ');"><i class="fa fa-remove"></i></a>';
	td7.textContent = costOfFix(lastelement);

	document.getElementById("vehiclesList").append(tr);
	document.getElementById("listTr" + lastelement).append(td1, td2, td3, td4, td5, td6, td7);

}

