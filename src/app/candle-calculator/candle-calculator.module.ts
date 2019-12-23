import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandleCalculatorComponent } from './candle-calculator.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CandleCalculatorService } from './candle-calculator.service';
import { MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    CandleCalculatorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [ CandleCalculatorService],
  exports: [
    CandleCalculatorComponent
  ]
})
export class CandleCalculatorModule { }
