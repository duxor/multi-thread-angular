import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ThreadType } from 'src/app/models/thread-type';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-switch-input',
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchInputComponent {
  @Input() control?: FormControl;

  ThreadType = ThreadType;
}
