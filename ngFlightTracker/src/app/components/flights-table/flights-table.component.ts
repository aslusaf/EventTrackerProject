import { HomeComponent } from './../home/home.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight';
import { FlightTrackerService } from 'src/app/services/flight-tracker.service';

@Component({
  selector: 'app-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.css'],
})
export class FlightsTableComponent implements OnInit {

  flights: Flight[] = [];

  thArr: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 29];

  totalMilesFlown: number = 0;

  tableHeaderArr: string[] = this.flightTrackerService.tableHeaderArr;

  constructor(
    private flightTrackerService: FlightTrackerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reload();
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

  editFlight(flight: Flight) {

    this.flightTrackerService.newFlight = flight;
    this.reload();
    console.log(flight);
  }

}
