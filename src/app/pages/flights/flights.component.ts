import { Component, OnInit } from '@angular/core';

import { FlightsService } from 'src/app/services/flights.service';
import { Airport } from 'src/app/models/airport.model';
import { Flight } from 'src/app/models/flight.model';

import { Sort, MatSnackBar } from '@angular/material';

@Component({
  selector: 'flights',
  templateUrl: './flights.component.html'
})
export class FlightsComponent implements OnInit {

  public airports: Array<any> = [];
  public flight: any = {};
  public flights = [];
  public dateValidator;

  constructor(private service: FlightsService, private snackBar: MatSnackBar) {
    this.dateValidator = { min: new Date(2019, 1, 10), max: new Date(2019, 1, 18) };
  }

  ngOnInit() {
    this.setAirports();
  }

  public getFlights() {
    this.flight.date = new Date(this.flight.viewDate).toISOString().substring(0, 10);
    this.service.getFlights(this.flight)
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

  private setAirports() {
    this.service.getAirports()
      .subscribe((airports: Airport[]) => this.airports = airports,
        (error) => this.snackBar.open('Não foi possivel obter os aeroportos, serviço fora do ar.', null, { duration: 3000 }));
  }

}
