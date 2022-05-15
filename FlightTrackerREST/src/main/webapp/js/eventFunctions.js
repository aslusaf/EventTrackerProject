let tableHeaderArr = ["ID", "Date", "Aircraft Type", "Aircraft Tail #", "Aircraft Name", "Departing Airport Identifier", "Departing Airport Name", "Arriving Airport ID", "Arriving Airport Name", "Miles Flown", "Flight Type", "# Day T/O", "# Night T/O", "# Day LDG", "# Night LDG", "# Inst. Appr.", "SE", "ME", "PIC", "SIC", "Dual Recieved", "Instructor / Examiner / Check Pilot", "TAA", "XC", "Night", "Actual Instrument", "Simulated Instrument", "Simulator Time", "Total", "Remarks"];
let fieldNamesArr = ["flightDate", "aircraftType", "aircraftIdentifier", "aircraftName",
	"departingAirportIdentifier", "departingAirportName", "arrivingAirportIdentifier",
	"arrivingAirportName", "distanceFlown", "flightType", "dayTakeoffs", "nightTakeoffs",
	"dayLandings", "nightLandings", "instrumentApproaches", "singleEngine", "multiEngine",
	"pilotInCommand", "secondInCommand", "dualReceived", "instructorExaminerCheckpilot",
	"technicallyAdvancedAircraft", "crossCountry", "night", "actualInstrument", "simulatedInstrument",
	"simulatorTime", "totalDuration", "remarks"];

window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
});

function init() {

	console.log("in init()");
	buildForm();
	getFlights();
	createEventListeners();

}

function buildForm() {

	console.log("buildForm() loaded");

	let labelTextContentArr = tableHeaderArr;

	let labelArr = [];
	let inputArr = [];

	fieldNamesArr.forEach(function(val, i) {

		let label = document.createElement('label');
		label.htmlFor = val;
		label.textContent = labelTextContentArr[i + 1] + ":";

		let input = (i !== 28) ? document.createElement('input') : document.createElement('textarea');

		setInputAttributes(input, val, i);

		labelArr.push(label);
		inputArr.push(input);

	});


	createFormHtml(labelArr, inputArr);


}

function createFormHtml(labelArr, inputArr) {

	let flightForm = document.flightForm;
	flightForm.textContent = '';

	let rowArr = [];
	let colArr = [];

	for (let i = 0; i < 11; i++) {
		rowArr.push(flightForm.appendChild(document.createElement('div')));
		rowArr[i].className = 'row';
	}
	for (let i = 0; i < 29; i++) {
		colArr.push(flightForm.appendChild(document.createElement('div')));
		colArr[i].className = 'col';
	}

	colArr[1].className = 'col'

	console.log(rowArr);
	console.log(colArr);


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

	for (let i = 0; i < colArr.length; i++) {

		colArr[i].appendChild(labelArr[i]);
		colArr[i].appendChild(inputArr[i]);

	}

	let submit = document.createElement('input');
	submit.type = "submit";
	submit.dirName = "submit";
	submit.id = "submit";
	submit.value = "Submit";
	submit.className = "btn btn-lg btn-primary col-2 mx-auto";

	rowArr[9].appendChild(submit);

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
			input.min = 0.0;
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

	console.log("getFlights() loaded");

	let xhr = new XMLHttpRequest();
	xhr.open("GET", "api/flights");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let flights = JSON.parse(xhr.responseText);
				console.log(flights);
				buildTable(flights);
			} else {
				console.log("Flights not Found");
				document.getElementById('flightsDiv').textContent = "Flights not Found";
			}
		}
	};

	xhr.send();
}

function buildTable(flights) {

	var flightsDiv = document.getElementById('flightsDiv');
	flightsDiv.textContent = '';
	flightsDiv.className = 'overflow-auto';
	var table = document.createElement('table');
	table.className = 'table table-striped table-primary table-hover table-bordered border-dark align-middle text-center w-auto';
	table.id = 'flightsTable';

	let thead = document.createElement('thead');
	thead.className = 'table-primary';

	let tr = document.createElement('tr');
	tr.className = 'table-primary';

	thead.appendChild(tr);

	tableHeaderArr.forEach(function(header, i) {

		if (i < 10 || i > 28) {
			var th = document.createElement('th');
			th.textContent = header;
			tr.appendChild(th);
		}
	});

	table.appendChild(thead);

	var tbody = document.createElement('tbody');
	tbody.className = 'table-group-divider';

	flights.forEach(function(obj) {

		var tr = document.createElement('tr');

		tr.addEventListener('click', function(e) {

			e.preventDefault();

			buildTable([obj]);

		});
		
		let count = 0;
		for (let val in obj) {

			if (count < 10 || count > 28) {

				if (val === "created") break;

				let td = document.createElement('td');
				td.textContent = obj[val];
				tr.appendChild(td);
			}
			count++;

		};

		tbody.appendChild(tr);
	});

	table.appendChild(tbody);
	flightsDiv.appendChild(table);
}

function createEventListeners() {

	console.log("createEventListeners() loaded");

	let submit = document.getElementById("submit"); // work around for now

	submit.addEventListener('click', function(e) {

		e.preventDefault();

		let flightObject = {};
		let inputTypeOfNumberIndexArr = [8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27];

		fieldNamesArr.forEach(function(val, i) {

			let formValue = document.getElementById(val).value;

			if (inputTypeOfNumberIndexArr.includes(i) && (!(typeof formValue === 'number') || isNaN(formValue))) formValue = 0;

			flightObject[val] = formValue;

		});

		console.log(flightObject);

		let xhr = new XMLHttpRequest();
		xhr.open("POST", "api/flights");
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200 || xhr.status === 201) {
					let flight = JSON.parse(xhr.responseText);
					console.log(flight);
					e.target.parentElement.parentElement.reset();
					getFlights();
				} else {
					console.log("POST request failed");
				}
			}
		};

		let flightObjectJson = JSON.stringify(flightObject);

		xhr.send(flightObjectJson);


	});

}