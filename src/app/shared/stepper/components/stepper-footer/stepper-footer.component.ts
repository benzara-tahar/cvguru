import { Component, OnInit } from '@angular/core';
import { StepperService } from '../../stepper.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-stepper-footer',
  templateUrl: './stepper-footer.component.html',
  styleUrls: ['./stepper-footer.component.scss']
})
export class StepperFooterComponent implements OnInit {
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

   clickNext() {
   this.stepperService.nextStep();
 }
 clickPrevious() {
  this.stepperService.previousStep();
}
}
