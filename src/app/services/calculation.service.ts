import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

import {Output} from '../models/output';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export abstract class CalculationService {
  inProgress$ = new BehaviorSubject<number>(0);
  output$ = new BehaviorSubject<Output[]>([]);
  difficulty = environment.difficulty;

  abstract runWorker(name: string);

  addOutput(value: string) {
    this.output$.next([
      ...this.output$.getValue(),
      {id: Math.random(), value: value},
    ]);
  }
}
