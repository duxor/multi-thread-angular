import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Output} from 'src/app/models/output';
import {trackById} from 'src/app/utils/track-by-id';
import {SingleThreadCalculationService} from 'src/app/services/single-thread-calculation.service';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.scss'],
})
export class SingleThreadComponent implements OnInit {

  inProgress$: BehaviorSubject<number>;
  output$: BehaviorSubject<Output[]>;
  trackById = trackById;

  constructor(private calculationService: SingleThreadCalculationService) {
  }

  ngOnInit() {
    this.calculationService.inProgress$.next(0);
    this.calculationService.output$.next([]);

    this.inProgress$ = this.calculationService.inProgress$;
    this.output$ = this.calculationService.output$;
  }

  async runWorker(data: { difficulty: number, processCount: number }) {
    this.calculationService.output$.next([]);
    this.calculationService.difficulty = data.difficulty;

    for (let i = 0, max = data.processCount; i < max; i++) {
      await this.calculationService.runWorker(`W-${i}`);
    }
  }

}
