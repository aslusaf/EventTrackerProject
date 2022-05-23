import { NewFlightFormComponent } from './../components/new-flight-form/new-flight-form.component';
import { Flight } from './../models/flight';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, throwError } from 'rxjs';
import { getAttrsForDirectiveMatching } from '@angular/compiler/src/render3/view/util';

@Injectable({
  providedIn: 'root',
})
export class FlightTrackerService {

  private url = environment.baseUrl + 'api/flights';

  newFlight: Flight = new Flight();

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

  constructor(
    private http: HttpClient,
    ) {}


  index() {
    return this.http.get<Flight[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FlightTrackerService: error retrieving Flight list');
      })
    );
  }

  create(newFlight: Flight) {
    console.log(newFlight);
    const httpOptions = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    return this.http.post<Flight>(this.url, newFlight, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('FlightTrackerService: error creating Flight');
      })
    );
  }

  update(updateFlight: Flight) {

    const httpOptions = {
      headers: {
        'Content-type': 'application/json',
      },
    };
    return this.http
      .put<Flight>(this.url + updateFlight.id, updateFlight, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('TodoService: error creating Todo');
        })
      );
  }
}
