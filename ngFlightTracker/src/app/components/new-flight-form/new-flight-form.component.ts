import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightTrackerService } from 'src/app/services/flight-tracker.service';

@Component({
  selector: 'app-new-flight-form',
  templateUrl: './new-flight-form.component.html',
  styleUrls: ['./new-flight-form.component.css'],
})
export class NewFlightFormComponent implements OnInit {
  update: boolean = false;

  flights: Flight[] = [];

  thArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 29];

  totalMilesFlown: number = 0;

  tableHeaderArr: string[] = [
    'ID',
    'Date',
    'Aircraft Type',
    'Aircraft Tail #',
    'Aircraft Name',
    'Departing Airport Identifier',
    'Departing Airport Name',
    'Arriving Airport Identifier',
    'Arriving Airport Name',
    'Miles Flown',
    'Flight Type',
    '# Day T/O',
    '# Night T/O',
    '# Day LDG',
    '# Night LDG',
    '# Instr. Appr.',
    'SE',
    'ME',
    'PIC',
    'SIC',
    'Dual Recieved',
    'Instr. / Exam.',
    'TAA',
    'XC',
    'Night',
    'Actual Instrument',
    'Sim. Instrument',
    'Simulator Time',
    'Total',
    'Remarks',
  ];

  fieldNamesArr: string[] = [
    'flightDate',
    'aircraftType',
    'aircraftIdentifier',
    'aircraftName',
    'departingAirportIdentifier',
    'departingAirportName',
    'arrivingAirportIdentifier',
    'arrivingAirportName',
    'distanceFlown',
    'flightType',
    'dayTakeoffs',
    'nightTakeoffs',
    'dayLandings',
    'nightLandings',
    'instrumentApproaches',
    'singleEngine',
    'multiEngine',
    'pilotInCommand',
    'secondInCommand',
    'dualReceived',
    'instructorExaminerCheckpilot',
    'technicallyAdvancedAircraft',
    'crossCountry',
    'night',
    'actualInstrument',
    'simulatedInstrument',
    'simulatorTime',
    'totalDuration',
    'remarks',
  ];

  newFlight: any = new Flight();
  rowSixArr: number[] = [10, 11, 12, 13, 14];
  rowSevenArr: number[] = [15, 16, 17, 18, 19, 20];
  rowEightArr: number[] = [21, 22, 23, 24, 25, 26];
  selected: Flight | null = null;

  constructor(private flightTrackerService: FlightTrackerService) {}

  ngOnInit(): void {
    this.reload();
  }

  addFlight() {
    console.log(this.newFlight);
    this.flightTrackerService.create(this.newFlight).subscribe(
      (data) => {
        this.reload();
        this.newFlightView();
      },
      (err) => console.error(err)
    );
  }

  submitForm() {
    this.addFlight();
  }

  updateFlight(updatedFlight: Flight) {
    this.flightTrackerService.update(updatedFlight).subscribe(
      (data) => {
        this.reload();
        this.newFlightView();
      },
      (err) => console.log(err)
    );
  }

  deleteFlight(id: number) {
    this.flightTrackerService.destroy(id).subscribe(
      (data) => {
        this.reload();
        this.newFlightView();
      },
      (err) => console.error(err)
    );
  }

  calculateTotalMiles() {
    this.totalMilesFlown = 0;
    this.flights.forEach((flight) => {
      this.totalMilesFlown += flight.distanceFlown;
    });
    return this.totalMilesFlown;
  }

  reload() {
    this.flightTrackerService.index().subscribe(
      (data) => (this.flights = data),
      (error) => console.log('Reload got an error ' + error)
    );
  }

  editFlightView(flight: Flight) {
    this.newFlight = flight;
    this.selected = flight;
  }

  newFlightView() {
    this.newFlight = new Flight();
    this.selected = null;
  }
}
