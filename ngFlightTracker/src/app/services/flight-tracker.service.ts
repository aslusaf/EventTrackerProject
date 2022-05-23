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
  private url = environment.baseUrl + 'api/flights/';

  constructor(private http: HttpClient) {}

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

  destroy(id: number) {
    return this.http.delete<void>(this.url + id).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('TodoService: error retrieving todo list');
      })
    );
  }
}
