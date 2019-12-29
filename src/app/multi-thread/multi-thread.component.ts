import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Output} from 'src/app/models/output';
import {FormBuilder} from '@angular/forms';
import {trackById} from 'src/app/utils/track-by-id';
import {MultiThreadCalculationService} from 'src/app/services/multi-thread-calculation.service';

@Component({
  selector: 'app-multi-thread',
  templateUrl: './multi-thread.component.html',
  styleUrls: ['./multi-thread.component.scss'],
})
export class MultiThreadComponent implements OnInit {

  inProgress$: BehaviorSubject<number>;
  output$: BehaviorSubject<Output[]>;
  trackById = trackById;

  constructor(private calculationService: MultiThreadCalculationService) {
  }

  ngOnInit() {
    this.inProgress$ = this.calculationService.inProgress$;
    this.output$ = this.calculationService.output$;
  }

  runWorker(data: { difficulty: number, processCount: number }) {
    this.calculationService.output$.next([]);
    this.calculationService.difficulty = data.difficulty;

    for (let i = 0, max = data.processCount; i < max; i++) {
      this.calculationService.runWorker(`W-${i}`);
    }
  }

}
