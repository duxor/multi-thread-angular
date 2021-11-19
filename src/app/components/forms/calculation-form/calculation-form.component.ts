import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { WorkerConfig } from 'src/app/models/worker-config';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculationFormComponent implements OnInit {
  @Input() inProgress = false;

  @Output() submitted = new EventEmitter<WorkerConfig>();

  form = this.fb.group({
    difficulty: [environment.difficulty],
    processCount: [environment.processes],
  });

  processes: number[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    const processes = [];
    for (let i = 1; i <= 32; i++) {
      processes.push(i);
    }
    this.processes = processes;
  }

  emitSubmittedEvent() {
    this.submitted.emit(this.form.getRawValue());
  }
}
