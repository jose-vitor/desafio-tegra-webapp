import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { FlightsService } from 'src/app/services/flights.service';
import { Airport } from 'src/app/models/airport.model';

@Component({
  selector: 'flights-filter',
  templateUrl: './flights-filter.component.html',
  styleUrls: []
})
export class FlightsFilterComponent implements OnInit {

  public airports: Array<any> = [];
  public flight: any = {};
  public dateValidator;

  @Output()
  public onFilter = new EventEmitter();

  constructor(private service: FlightsService, private snackBar: MatSnackBar) {
    this.dateValidator = { min: new Date(2019, 1, 10), max: new Date(2019, 1, 18) };
  }

  ngOnInit() {
    this.setAirports();
  }

  public filter() {
    this.onFilter.emit(this.flight);
  }

  private setAirports() {
    this.service.getAirports()
      .subscribe((airports: Airport[]) => this.airports = airports,
        (error) => this.snackBar.open('Não foi possivel obter os aeroportos, serviço fora do ar.', null, { duration: 3000 }));
  }

}
