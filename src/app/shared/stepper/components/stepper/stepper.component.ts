import { Component, OnInit,ContentChildren, Input, QueryList, AfterContentInit } from '@angular/core';
import { StepperService } from '../../stepper.service';
import { StepComponent } from '../step/step.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit , AfterContentInit{
  @ContentChildren(StepComponent) stepComponent!: QueryList<StepComponent>
  @Input() items:any
  currentStep: number = 1;
  subscription: Subscription;
  constructor(private stepperService: StepperService) { 
    this.subscription = this.stepperService
      .onChange()
      .subscribe((value) => (this.currentStep = value));
  }

  ngOnInit(): void {
  }
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  ngAfterContentInit() { 
    console.log(`ngAfterContentInit - jokeContentChild is ${this.stepComponent}`);
   let steps=this.stepComponent.toArray()
   //steps[this.currentStep].style.backgroundColor = 'yellow';
  }

}
