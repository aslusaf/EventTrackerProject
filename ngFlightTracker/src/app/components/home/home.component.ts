import { FlightsTableComponent } from './../flights-table/flights-table.component';
import { NewFlightFormComponent } from './../new-flight-form/new-flight-form.component';
import { FlightTrackerService } from './../../services/flight-tracker.service';
import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit(): void {

  }

}
