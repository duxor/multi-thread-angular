import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FormBuilder, FormGroup} from '@angular/forms';
import {environment} from 'src/environments/environment';

@Component({
  selector: 'app-calculation-form',
  templateUrl: './calculation-form.component.html',
  styleUrls: ['./calculation-form.component.scss'],
})
export class CalculationFormComponent implements OnInit {

  @Input()
  inProgress$: BehaviorSubject<number>;

  @Output()
  submitted = new EventEmitter(null);

  form: FormGroup;
  processes = [];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      difficulty: [environment.difficulty],
      processCount: [environment.processes],
    });

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
