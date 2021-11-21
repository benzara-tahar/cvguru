import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stepper-header',
  templateUrl: './stepper-header.component.html',
  styleUrls: ['./stepper-header.component.scss']
})
export class StepperHeaderComponent implements OnInit {
  @Input() items:any
  constructor() { }

  ngOnInit(): void {
  }
}
