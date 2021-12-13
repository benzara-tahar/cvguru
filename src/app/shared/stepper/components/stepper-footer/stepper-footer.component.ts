import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StepperService } from '../../stepper.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stepper-footer',
  templateUrl: './stepper-footer.component.html',
  styleUrls: ['./stepper-footer.component.scss'],
})
export class StepperFooterComponent implements OnInit {
  currentStep: number = 0;
  @Output() canGoNext : EventEmitter<number> = new EventEmitter();
  subscription: Subscription;
  constructor(private stepperService: StepperService) {
    this.subscription = this.stepperService
      .onChange()
      .subscribe((value) => (this.currentStep = value));
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

  clickNext() {
    let canGoNext
    this.stepperService.nextStep();
  }
  clickPrevious() {
    this.stepperService.previousStep();
  }
}
