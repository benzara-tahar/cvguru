import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StepDef } from '../stepper/stepper.component';

@Component({
  selector: 'app-stepper-item',
  templateUrl: './stepper-item.component.html',
  styleUrls: ['./stepper-item.component.scss'],
})
export class StepperItemComponent implements OnInit {
  @Input() item!: StepDef;
  constructor() {}

  ngOnInit(): void {}
}
