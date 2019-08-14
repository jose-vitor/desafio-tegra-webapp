import { Component, OnInit } from '@angular/core';

import { FlightsService } from 'src/app/services/flights.service';
import { Flight } from 'src/app/models/flight.model';

import { Sort, MatSnackBar } from '@angular/material';

@Component({
  selector: 'flights',
  templateUrl: './flights.component.html'
})
export class FlightsComponent implements OnInit {

  public flights = [];

  constructor(private service: FlightsService, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
  }

  public getFlights(flight) {
    flight.date = new Date(flight.viewDate).toISOString().substring(0, 10);
    this.service.getFlights(flight)
      .subscribe(flights => {
        if (!flights.length) {
          this.snackBar.open('Voo não encontrado', null, { duration: 2000 });
          return;
        }
        this.flights = flights.map(Flight.getFlighTime)
      })
  }

  sortData(sort: Sort) {
    const isAsc = sort.direction === 'asc';
    let compare = (a, b) => (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    this.flights = this.flights.sort((a, b) =>
      !sort.active ? 0 : compare(a[sort.active], b[sort.active])
    );
  }

}
