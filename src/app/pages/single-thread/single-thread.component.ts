import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { trackById } from 'src/app/utils/track-by-id';
import { SingleThreadCalculationService } from 'src/app/services/single-thread-calculation.service';

@Component({
  selector: 'app-single-thread',
  templateUrl: './single-thread.component.html',
  styleUrls: ['./single-thread.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SingleThreadComponent implements OnInit {
  inProgress$ = this.calculationService.inProgress$;
  output$ = this.calculationService.output$;
  trackById = trackById;

  constructor(private calculationService: SingleThreadCalculationService) {}

  ngOnInit() {
    this.calculationService.resetInProgress();
    this.calculationService.resetOutputs();
  }

  async runWorker(data: { difficulty: number; processCount: number }) {
    this.calculationService.resetOutputs();
    this.calculationService.difficulty = data.difficulty;

    for (let i = 0, max = data.processCount; i < max; i++) {
      await this.calculationService.runWorker(`W-${i}`);
    }
  }
}
