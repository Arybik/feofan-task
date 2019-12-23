import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { CandleCalculatorService } from './candle-calculator.service';

@Component({
  selector: 'app-candle-calculator',
  templateUrl: './candle-calculator.component.html',
  styleUrls: ['./candle-calculator.component.sass']
})
export class CandleCalculatorComponent {

  result: number = null;
  candlesForm = this.fb.group({
    soldCandles: [null, [Validators.required, Validators.min(0)]],
    candleEnds: [null, [Validators.required, Validators.min(2)]]
  });
  constructor(private fb: FormBuilder, private calculatorService: CandleCalculatorService) { }

  calculate() {
    this.result = this.calculatorService.calculateCandlesAmount(this.soldCandles, this.candleEnds);
  }

  get soldCandles(): number {
    return this.soldCandlesControl.value;
  }

  get soldCandlesControl(): AbstractControl {
    return this.candlesForm.get('soldCandles');
  }

  get candleEnds(): number {
    return this.candleEndsControl.value;
  }
  get candleEndsControl(): AbstractControl {
    return this.candlesForm.get('candleEnds');
  }
}
