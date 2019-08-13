import { NgModule } from '@angular/core';

import {
  MatInputModule, MatButtonModule, MatSelectModule,
  MatFormFieldModule, MatCardModule, MatGridListModule,
  MatToolbarModule, MatDatepickerModule, MatSortModule, MatTableModule,
  MatSnackBarModule
} from '@angular/material';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';

const modules = [
  MatFormFieldModule, MatSelectModule, MatButtonModule,
  NoopAnimationsModule, MatCardModule,
  MatGridListModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule,
  MatInputModule, MatSortModule, MatTableModule, MatSnackBarModule
]

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [
    MatDatepickerModule, { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
  ],
})
export class CustomMaterialModule { }
