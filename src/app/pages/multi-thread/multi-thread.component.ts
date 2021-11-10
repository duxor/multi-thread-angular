import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { trackById } from 'src/app/utils/track-by-id';
import { MultiThreadCalculationService } from 'src/app/services/multi-thread-calculation.service';

@Component({
  selector: 'app-multi-thread',
  templateUrl: './multi-thread.component.html',
  styleUrls: ['./multi-thread.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultiThreadComponent implements OnInit {
  inProgress$ = this.calculationService.inProgress$;
  output$ = this.calculationService.output$;
  trackById = trackById;

  constructor(private calculationService: MultiThreadCalculationService) {}

  ngOnInit() {
    this.calculationService.resetInProgress();
    this.calculationService.resetOutputs();
  }

  runWorker(data: { difficulty: number; processCount: number }) {
    this.calculationService.resetOutputs();
    this.calculationService.difficulty = data.difficulty;

    for (let i = 0, max = data.processCount; i < max; i++) {
      this.calculationService.runWorker(`W-${i}`);
    }
  }
}
