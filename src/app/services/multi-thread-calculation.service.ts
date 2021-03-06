import {Injectable} from '@angular/core';
import {CalculationService} from 'src/app/services/calculation.service';

@Injectable({
  providedIn: 'root',
})
export class MultiThreadCalculationService extends CalculationService {

  runWorker(name: string) {
    if (typeof Worker === 'undefined') {
      return;
    }

    this.inProgress$.next(this.inProgress$.getValue() + 1);

    const startTime = new Date();
    this.addOutput(`[${name}] started at: ${startTime.toUTCString()}`);

    const webworker = new Worker('../workers/calculation.worker', {type: 'module'});

    webworker.onmessage = (data) => {
      this.addOutput(`[${name}] calculation result: ${data.data}`);

      const endTime = new Date();
      const executionTime = (endTime.getTime() - startTime.getTime()) / 1000;

      this.addOutput(`[${name}] finished at ${endTime.toUTCString()}, execution time: ${executionTime}!`);
      this.inProgress$.next(this.inProgress$.getValue() - 1);

      webworker.terminate();
    };

    webworker.onerror = (data) => {
      console.error(data);
      this.inProgress$.next(this.inProgress$.getValue() - 1);

      webworker.terminate();
    };

    webworker.postMessage(this.difficulty);
  }

}
