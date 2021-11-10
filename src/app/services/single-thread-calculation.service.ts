import { Injectable } from '@angular/core';
import { CalculationService } from 'src/app/services/calculation.service';
import { calculateSum } from 'src/app/utils/calculate-sum';

@Injectable({
  providedIn: 'root',
})
export class SingleThreadCalculationService extends CalculationService {
  runWorker(name: string) {
    this.inProgress.next(this.inProgress.getValue() + 1);

    const startTime = new Date();
    this.addOutput(`[${name}] started at: ${startTime.toUTCString()}`);

    const result = calculateSum(this.difficulty);
    this.addOutput(`[${name}] calculation result: ${result}`);

    const endTime = new Date();
    this.addOutput(
      `[${name}] finished at ${endTime.toUTCString()}, execution time: ${
        (endTime.getTime() - startTime.getTime()) / 1000
      }!`
    );
    this.inProgress.next(this.inProgress.getValue() - 1);
  }
}
