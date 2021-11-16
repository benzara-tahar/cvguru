import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper-item',
  templateUrl: './stepper-item.component.html',
  styleUrls: ['./stepper-item.component.scss']
})
export class StepperItemComponent implements OnInit {
  @Input() item : any;
  constructor() { }

  ngOnInit(): void {
  }

}
