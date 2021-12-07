import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperHeaderComponent } from './components/stepper-header/stepper-header.component';
import { StepComponent } from './components/step/step.component';
import { StepperFooterComponent } from './components/stepper-footer/stepper-footer.component';
import { StepperComponent } from './components/stepper/stepper.component';



@NgModule({
  declarations: [
    StepperHeaderComponent,
    StepComponent,
    StepperFooterComponent,
    StepperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StepperHeaderComponent,
    StepComponent,
    StepperFooterComponent,
    StepperComponent]
})
export class StepperModule { }
