import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { Airport } from '../models/airport.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  private FLIGHTS_API_URL = `${environment.flightsApi}`;

  constructor(private http: HttpClient) { }

  public getAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(`${this.FLIGHTS_API_URL}airports`);
  }

  public getFlights(flight): Observable<any> {
    return this.http.post(`${this.FLIGHTS_API_URL}flights/`, flight);
  }

}
