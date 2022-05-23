import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { FlightTrackerService } from 'src/app/services/flight-tracker.service';
import { FlightsTableComponent } from '../flights-table/flights-table.component';

@Component({
  selector: 'app-new-flight-form',
  templateUrl: './new-flight-form.component.html',
  styleUrls: ['./new-flight-form.component.css'],
})
export class NewFlightFormComponent implements OnInit {

  tableHeaderArr: string[] = this.flightTrackerService.tableHeaderArr;
  fieldNamesArr: string[] = this.flightTrackerService.fieldNamesArr;

  newFlight: any = this.flightTrackerService.newFlight;
  rowSixArr: number[] = [10, 11, 12, 13, 14];
  rowSevenArr: number[] = [15, 16, 17, 18, 19, 20];
  rowEightArr: number[] = [21, 22, 23, 24, 25, 26];
  selected: Flight | null = null;
  updateFlight: Flight | null = null;


  constructor(
    private flightTrackerService: FlightTrackerService,
    private flightsTableComponent: FlightsTableComponent
    ) {}

  ngOnInit(): void {}

  addFlight() {
    console.log(this.newFlight);
    this.flightTrackerService.create(this.newFlight).subscribe(
      (data) => {
        this.flightsTableComponent.reload();
        this.newFlight = new Flight();
      },
      (err) => console.error(err)
    );
  }

  submitForm() {
    this.addFlight();
  }

  setEditFlight(selected: Flight) {
    this.newFlight = Object.assign({}, this.selected);
  }

  updateSelectedFlight(updateFlight: Flight) {
    this.flightTrackerService.update(updateFlight).subscribe(
      (data) => {
        // this.reload();
        // this.editTodo = null;
        if (this.selected) {
          this.selected = Object.assign({}, updateFlight);
        }
      },
      (err) => console.log(err)
    );
  }
}
