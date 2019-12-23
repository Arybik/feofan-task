import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CandleCalculatorService {

  /**
   * Calculate total amount of candles that can be sold
   * @param soldCandles Initially sold candles
   * @param candleEndsForCandle Number of candle ends required to create a candle
   */
  public calculateCandlesAmount(soldCandles: number, candleEndsForCandle: number): number {
    let totalCandlesSold = soldCandles;
    let candleEndsLeft = soldCandles;
    while (candleEndsLeft >= candleEndsForCandle) {
      const newCandlesAmount = Math.floor(candleEndsLeft / candleEndsForCandle);
      totalCandlesSold += newCandlesAmount;
      candleEndsLeft = newCandlesAmount + candleEndsLeft % candleEndsForCandle;
    }
    return totalCandlesSold;
  }

  /**
   * Another option for calculation of sold candles with recursion
   */
  public calculateCandlesWithRecursion(soldCandles: number, candleEndsForCandle: number): number {
    return soldCandles + this.calculateNewCandles(soldCandles, candleEndsForCandle);
  }

  /**
   * Calculate amount of candles that can be created from received candle ends
   * @param candleEndsReceived
   * @param candleEndsForCandle
   */
  private calculateNewCandles(candleEndsReceived: number, candleEndsForCandle: number): number {
    if (candleEndsReceived >= candleEndsForCandle) {
      const newCandlesAmount = Math.floor(candleEndsReceived / candleEndsForCandle);
      const candleEndsLeft = newCandlesAmount + candleEndsReceived % candleEndsForCandle;
      return newCandlesAmount + this.calculateNewCandles(candleEndsLeft, candleEndsForCandle);
    }
    return 0;
  }
}
