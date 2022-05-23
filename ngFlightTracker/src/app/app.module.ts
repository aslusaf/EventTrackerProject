import { FlightTrackerService } from './services/flight-tracker.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlightsTableComponent } from './components/flights-table/flights-table.component';
import { NewFlightFormComponent } from './components/new-flight-form/new-flight-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightsTableComponent,
    NewFlightFormComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    FlightTrackerService,
    FlightsTableComponent,
    NewFlightFormComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
