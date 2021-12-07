import { Component, OnInit, Input } from '@angular/core';
import { StepDef } from '../stepper/stepper.component';

@Component({
  selector: 'app-stepper-header',
  templateUrl: './stepper-header.component.html',
  styleUrls: ['./stepper-header.component.scss']
})
export class StepperHeaderComponent implements OnInit {
  @Input() items !:StepDef[]
  constructor() { }

  ngOnInit(): void {
  }
}
