import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MultiThreadCalculationService } from 'src/app/services/multi-thread-calculation.service';
import { trackById } from 'src/app/utils/track-by-id';
import { SingleThreadCalculationService } from 'src/app/services/single-thread-calculation.service';
import { combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Output } from 'src/app/models/output';
import { ThreadType } from 'src/app/models/thread-type';
import { WorkerConfig } from 'src/app/models/worker-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  ThreadType = ThreadType;

  type = new FormControl(ThreadType.Multi);
  inProgress$ = combineLatest([
    this.type.valueChanges.pipe(startWith(this.type.value)),
    this.singleThreadCalculationService.inProgress$,
    this.multiThreadCalculationService.inProgress$,
  ]).pipe(
    map(
      ([type, isSingleLoading, isMultiLoading]: [
        ThreadType,
        boolean,
        boolean
      ]) => {
        return type === ThreadType.Single ? isSingleLoading : isMultiLoading;
      }
    )
  );
  output$ = combineLatest([
    this.type.valueChanges.pipe(startWith(this.type.value)),
    this.singleThreadCalculationService.output$,
    this.multiThreadCalculationService.output$,
  ]).pipe(
    map(
      ([type, singleOutput, multiOutput]: [ThreadType, Output[], Output[]]) => {
        return type === ThreadType.Single ? singleOutput : multiOutput;
      }
    )
  );
  trackById = trackById;

  constructor(
    private multiThreadCalculationService: MultiThreadCalculationService,
    private singleThreadCalculationService: SingleThreadCalculationService
  ) {}

  runWorker(data: WorkerConfig): void {
    if (this.type.value === ThreadType.Single) {
      this.runSingleThreadWorker(data);
      return;
    }
    this.runMultiThreadWorker(data);
  }

  private runSingleThreadWorker(data: WorkerConfig): void {
    this.singleThreadCalculationService.resetOutputs();
    this.singleThreadCalculationService.difficulty = data.difficulty;

    for (let i = 0, max = data.processCount; i < max; i++) {
      this.singleThreadCalculationService.runWorker(`W-${i}`);
    }
  }

  private async runMultiThreadWorker(data: WorkerConfig): Promise<void> {
    this.multiThreadCalculationService.resetOutputs();
    this.multiThreadCalculationService.difficulty = data.difficulty;

    for (let i = 0, max = data.processCount; i < max; i++) {
      await this.multiThreadCalculationService.runWorker(`W-${i}`);
    }
  }
}
