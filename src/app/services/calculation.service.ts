import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Output } from '../models/output';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export abstract class CalculationService {
  protected inProgress = new BehaviorSubject<number>(0);
  protected output = new BehaviorSubject<Output[]>([]);

  inProgress$: Observable<boolean> = this.inProgress
    .asObservable()
    .pipe(map((count) => count > 0));
  output$: Observable<Output[]> = this.output.asObservable();
  difficulty = environment.difficulty;

  abstract runWorker(name: string): void;

  addOutput(value: string): void {
    this.output.next([
      ...this.output.getValue(),
      { id: Math.random(), value: value },
    ]);
  }

  resetInProgress() {
    this.inProgress.next(0);
  }

  resetOutputs() {
    this.output.next([]);
  }
}
