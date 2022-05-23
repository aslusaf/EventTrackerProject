let tableHeaderArr = ["ID", "Date", "Aircraft Type", "Aircraft Tail #", "Aircraft Name", "Departing Airport Identifier",
	"Departing Airport Name", "Arriving Airport Identifier", "Arriving Airport Name", "Miles Flown", "Flight Type", "# Day T/O",
	"# Night T/O", "# Day LDG", "# Night LDG", "# Instrument Approaches", "SE", "ME", "PIC", "SIC", "Dual Recieved",
	"Instructor / Examiner", "TAA", "XC", "Night", "Actual Instrument", "Simulated Instrument", "Simulator Time", "Total", "Remarks"];

let fieldNamesArr = ["flightDate", "aircraftType", "aircraftIdentifier", "aircraftName",
	"departingAirportIdentifier", "departingAirportName", "arrivingAirportIdentifier",
	"arrivingAirportName", "distanceFlown", "flightType", "dayTakeoffs", "nightTakeoffs",
	"dayLandings", "nightLandings", "instrumentApproaches", "singleEngine", "multiEngine",
	"pilotInCommand", "secondInCommand", "dualReceived", "instructorExaminerCheckpilot",
	"technicallyAdvancedAircraft", "crossCountry", "night", "actualInstrument", "simulatedInstrument",
	"simulatorTime", "totalDuration", "remarks"];

let inputTypeOfNumberIndexArr = [8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];
let requiredFieldsArray = [0, 2, 4, 6];
let errorArr = [];

let labelArr = [];
let inputArr = [];
let rowArr = [];
let colArr = [];

let updateButton = document.createElement('input');
let deleteButton = document.createElement('input');
let submitButton = document.createElement('input');

let objId;

let isSingleRow = false;

window.addEventListener('load', function(e) {
//	console.log('document loaded');
	init();
});

function init() {

//	console.log("in init()");
	buildNavBar();
	buildForm();
	getFlights();
	createEventListeners();

}

function buildNavBar() {

	let navBar = document.getElementById("navBar");
	navBar.className = "navbar navbar-dark bg-dark";

	let navBarContainerDiv = document.createElement("div");
	navBarContainerDiv.className = "container-fluid";

	let homeIconAnchor = document.createElement("a");
	homeIconAnchor.className = "navbar-brand";
	homeIconAnchor.href = "./";

	let homeIcon = document.createElement("img");
	homeIcon.className = "d-inline-block align-text-top";
	homeIcon.src = "images/homeIcon.png";
	homeIcon.width = "32";
	homeIcon.height = "32";

	let homeText = document.createElement("strong");
	homeText.textContent = "Home";

	let homeSpace = document.createTextNode('\u00A0');

	let heading = document.createElement("h1");
	heading.className = "navbar-brand display-3 mx-auto";
	heading.textContent = "Flight Logbook Tracker";

	let heading2 = document.createElement("h1");
	heading2.className = "navbar-brand display-3 mr-auto";
	heading2.textContent = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

	homeIconAnchor.appendChild(homeIcon);
	homeIconAnchor.appendChild(homeSpace);
	homeIconAnchor.appendChild(homeText);
	navBarContainerDiv.appendChild(homeIconAnchor);
	navBarContainerDiv.appendChild(heading);
	navBarContainerDiv.appendChild(heading2);
	navBar.appendChild(navBarContainerDiv);
}

function buildForm() {

//	console.log("buildForm() loaded");

	let labelTextContentArr = tableHeaderArr;

	fieldNamesArr.forEach(function(val, i) {

		let label = document.createElement('label');
		label.htmlFor = val;
		label.textContent = labelTextContentArr[i + 1] + ":";

		let input = (i !== 28) ? document.createElement('input') : document.createElement('textarea');

		setInputAttributes(input, val, i);

		labelArr.push(label);
		inputArr.push(input);

	});


	createFormHtml();


}

function createFormHtml() {

	let flightForm = document.flightForm;
	flightForm.textContent = '';

	for (let i = 0; i < 11; i++) {
		rowArr.push(flightForm.appendChild(document.createElement('div')));
		rowArr[i].className = 'row';
	}
	for (let i = 0; i < 29; i++) {
		colArr.push(flightForm.appendChild(document.createElement('div')));
		colArr[i].className = 'col';
	}

	colArr[1].className = 'col'

//	console.log(rowArr);
//	console.log(colArr);


	let rowColCountArr = [1, 3, 4, 2, 5, 6, 6, 1, 1];
	let rowCount = 0;
	let colCount = 0;

	for (let count of rowColCountArr) {

		for (let i = 0; i < count; i++) {

			rowArr[rowCount].appendChild(colArr[colCount]);
			colCount++;

		}

		rowCount++;

	}

	appendFormTags();

	addRemoveSubmitUpdateDelete();

}

function appendFormTags(obj) {

//	console.log("obj tags");
//	console.log(obj);
//	console.log(((typeof obj !== 'undefined')));

	for (let i = 0; i < colArr.length; i++) {

		if ((typeof obj !== 'undefined')) {
			inputArr[i].value = obj[fieldNamesArr[i]];
		} else {
			inputArr[i].value = "";
			colArr[i].appendChild(labelArr[i]);
			colArr[i].appendChild(inputArr[i]);
		}

	}
}

function setInputAttributes(input, val, i) {

	switch (i) {

		case (0):
			input.type = "date";
			break;
		case (2):
			input.type = "text";
			input.placeholder = "Required";
			break;
		case (1):
		case (3):
		case (5):
		case (7):
		case (9):
			input.type = "text";
			break;
		case (28):
			input.rows = "5";
			break;
		case (4):
		case (6):
			input.type = "text";
			input.maxLength = "4";
			input.placeholder = "Required";
			break;
		case (8):
		case (10):
		case (11):
		case (12):
		case (13):
		case (14):
			input.type = "number";
			input.min = 0;
			input.max = 2147483647;
			break;
		default:
			input.type = "number";
			input.step = "0.1"
			input.min = 0.0;
			input.max = 2147483647;
			break;
	}

	input.dirName = val;
	input.id = val;
	input.className = (i !== 28) ? "input-group form-control" : "form-control";

}

function getFlights() {

//	console.log("getFlights() loaded");

	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/flights");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let flights = JSON.parse(xhr.responseText);
//				console.log(flights);
				buildTable(flights);
			} else {
//				console.log("Flights not Found");
				document.getElementById('flightsDiv').textContent = "Flights not Found";
			}
		}
	};

	xhr.send();
}

function buildTable(flights) {

	let flightsDiv = document.getElementById('flightsDiv');
	flightsDiv.textContent = '';
	flightsDiv.className = 'overflow-auto';
	let table = document.createElement('table');
	table.className = 'table table-striped table-light table-hover table-bordered border-dark align-middle text-center mx-auto';
	table.id = 'flightsTable';

	let thead = document.createElement('thead');
	thead.className = 'table-dark';

	let tr = document.createElement('tr');

	thead.appendChild(tr);

	tableHeaderArr.forEach(function(header, i) {

		if ((i < 10 || i > 28) && !isSingleRow) {

			let th = document.createElement('th');
			th.textContent = header;
			tr.appendChild(th);

		} else if (isSingleRow) {

			let th = document.createElement('th');
			th.textContent = header;
			tr.appendChild(th);

		}

	});

	table.appendChild(thead);

	let tbody = document.createElement('tbody');
	tbody.className = 'table-group-divider';

	let totalDistanceFlown = 0;

	flights.forEach(function(obj) {

		let tr = document.createElement('tr');

		tr.addEventListener('click', function(e) {

			e.preventDefault();

			if (isSingleRow) {

				isSingleRow = false;
				appendFormTags();
				addRemoveSubmitUpdateDelete();
				getFlights();
				resetLabelHeadersColor()

			} else {

				isSingleRow = true;
				appendFormTags(obj);
				addRemoveSubmitUpdateDelete(1);
				objId = obj.id;
				buildTable([obj]);
				resetLabelHeadersColor()
				
				let tfoot = document.getElementsByTagName("tfoot")[0];

				while (tfoot.firstChild) {
					tfoot.removeChild(tfoot.firstChild);
				}

			}

		});

		let count = 0;

		for (let val in obj) {

			if (val === 'distanceFlown') totalDistanceFlown += obj[val];

			if ((count < 10 || count > 28) && !isSingleRow) {

				if (val === "created") break;

				let td = document.createElement('td');
				td.textContent = obj[val];
				tr.appendChild(td);


			} else if (isSingleRow) {

				if (val === "created") break;

				let td = document.createElement('td');
				td.textContent = obj[val];
				tr.appendChild(td);

			}
			count++;


		};

//		console.log('totalDistanceFlown');
//		console.log(totalDistanceFlown);

		tbody.appendChild(tr);
	});

	let tfoot = document.createElement("tfoot");
	tfoot.className = "table-dark";
	tr = document.createElement('tr');
	td = document.createElement('td');
	td.colSpan = "9";
	td.textContent = "Total Miles Flown:";
	td.className = "align-middle text-end";
	tr.appendChild(td);
	td = document.createElement('td');
	td.textContent = totalDistanceFlown;
	tr.appendChild(td);
	td = document.createElement('td');
	tr.appendChild(td);
	tfoot.appendChild(tr);


	table.appendChild(tbody);
	table.appendChild(tfoot);
	flightsDiv.appendChild(table);


}

function addRemoveSubmitUpdateDelete(i) {

	switch (i) {

		case (1):

//			console.log("in case 1");

			while (rowArr[9].firstChild) {
				rowArr[9].removeChild(rowArr[9].firstChild);
			}

			updateButton.type = "button";
			updateButton.dirName = "updateButton";
			updateButton.id = "updateButton";
			updateButton.value = "Update";
			updateButton.className = "btn btn-lg btn-primary";

			deleteButton.type = "button";
			deleteButton.dirName = "deleteButton";
			deleteButton.id = "deleteButton";
			deleteButton.value = "Delete";
			deleteButton.className = "btn btn-lg btn-danger";

			let buttonGroup = document.createElement('div');
			buttonGroup.className = 'btn-group col-4 mx-auto';

			buttonGroup.appendChild(updateButton);
			buttonGroup.appendChild(deleteButton);
			rowArr[9].appendChild(buttonGroup);

//			console.log(updateButton);
//			console.log(deleteButton);

			break;

		default:

			while (rowArr[9].firstChild) {
				rowArr[9].removeChild(rowArr[9].firstChild);
			}

			submitButton.type = "submit";
			submitButton.dirName = "submitButton";
			submitButton.id = "submitButton";
			submitButton.value = "Submit";
			submitButton.className = "btn btn-lg btn-secondary col-2 mx-auto";
			rowArr[9].appendChild(submitButton);

			break;

	}



}

function createEventListeners() {

//	console.log("createEventListeners() loaded");

	submitButton.addEventListener('click', function(e) {

		e.preventDefault();

		let flightObject = {};
		errorArr = [];

		fieldNamesArr.forEach(function(val, i) {

			let formValue = document.getElementById(val).value;

			if (requiredFieldsArray.includes(i) && (formValue === "")) {
				errorArr.push(i);
			}

			if (inputTypeOfNumberIndexArr.includes(i) && isNaN(parseInt(formValue))) formValue = 0;

			flightObject[val] = formValue;

		});

		if (requiredFieldsVerification()) return;

		let xhr = new XMLHttpRequest();
		xhr.open("POST", "api/flights");
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 201) {
					let flight = JSON.parse(xhr.responseText);
//					console.log(flight);
					e.target.parentElement.parentElement.reset();
					getFlights();
				} else {
//					console.log("POST request failed");
				}
			}
		};

		let flightObjectJson = JSON.stringify(flightObject);

		xhr.send(flightObjectJson);


	});

	updateButton.addEventListener('click', function(e) {

		e.preventDefault();

		let flightObject = {};
		errorArr = [];

		fieldNamesArr.forEach(function(val, i) {

			let formValue = document.getElementById(val).value;

			if (requiredFieldsArray.includes(i) && (formValue === "")) {
				errorArr.push(i);
			}

			if (inputTypeOfNumberIndexArr.includes(i) && isNaN(parseInt(formValue))) formValue = 0;

			flightObject[val] = formValue;

		});

		if (requiredFieldsVerification()) return;

		let xhr = new XMLHttpRequest();
		xhr.open("PUT", "api/flights/" + objId);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 202) {
					let flight = JSON.parse(xhr.responseText);
//					console.log(flight);
					e.target.parentElement.parentElement.parentElement.reset();
					isSingleRow = false;
					getFlights();
					addRemoveSubmitUpdateDelete();
				} else {
					console.log("PUT request failed");
				}
			}
		};

		let flightObjectJson = JSON.stringify(flightObject);

		xhr.send(flightObjectJson);


	});

	deleteButton.addEventListener('click', function(e) {

		e.preventDefault();

		let xhr = new XMLHttpRequest();
		xhr.open("DELETE", "api/flights/" + objId);

		xhr.onreadystatechange = function() {

			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 204) {
					e.target.parentElement.parentElement.parentElement.reset();
					isSingleRow = false;
					getFlights();
					addRemoveSubmitUpdateDelete();
				} else {
					console.log("DELETE request failed");
				}
			}
		};

		xhr.send();


	});

}

function requiredFieldsVerification() {

	resetLabelHeadersColor()

	if (errorArr.length > 0) {

		let errorMessage = "";

		for (let error of errorArr) {

			if (error === 0) {
				errorMessage += "'Date:' field must not be blank.\n\n"
				labelArr[error].style.color = "red";
			}
			if (error === 2) {
				errorMessage += "'Aircraft Tail #:' field must not be blank.\n\n"
				labelArr[error].style.color = "red";
			}
			if (error === 4) {
				errorMessage += "'Departing Airport Identifier:' field must not be blank.\n\n"
				labelArr[error].style.color = "red";
			}
			if (error === 6) {
				errorMessage += "'Arriving Airport Identifier:' field must not be blank.\n\n"
				labelArr[error].style.color = "red";
			}

		}

		window.alert(errorMessage);
		return true;

	}
}

function resetLabelHeadersColor() {

	for (let fieldIndex of requiredFieldsArray) {

		labelArr[fieldIndex].style.color = "black";

	}
}