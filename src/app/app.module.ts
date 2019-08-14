import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FlightsComponent } from './pages/flights/flights.component';
import { CustomMaterialModule } from './shared/custom-material.module';
import { FormsModule } from '@angular/forms';
import { FlightsFilterComponent } from './pages/flights/flights-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightsComponent,
    FlightsFilterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomMaterialModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
