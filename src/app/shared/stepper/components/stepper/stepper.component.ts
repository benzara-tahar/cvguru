import {
  Component,
  OnInit,
  ContentChildren,
  Input,
  QueryList,
  AfterContentInit,
} from '@angular/core';
import { StepperService } from '../../stepper.service';
import { StepComponent } from '../step/step.component';
import { Subscription } from 'rxjs';

export interface StepDef {
  title: string;
  icon: string;
}
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit, AfterContentInit {
  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;
  items: StepDef[] = [];
  currentStep: number = 0;
  subscription: Subscription;
  constructor(private stepperService: StepperService) {
    this.subscription = this.stepperService.onChange().subscribe((value) => {
      this.currentStep = value;
      this.updateStepsVisibility();
    });
  }

  updateStepsVisibility() {
    let steps = this.steps.toArray();
    const currentStep = this.steps.get(this.currentStep);
    if (currentStep == null) {
      return;
    }
    this.steps.forEach((step, index) => {
      if (this.currentStep === index) {
        step.show();
      } else {
        step.hide();
      }
    });
  }

  ngOnInit(): void {}
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }
  ngAfterContentInit() {
    this.updateStepsVisibility();

    this.items = this.steps
      .toArray()
      .map((e) => ({ title: e.title, icon: e.icon }));
  }
}
