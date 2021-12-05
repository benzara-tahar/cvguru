import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperHeaderComponent } from './components/stepper-header/stepper-header.component';
import { StepperItemComponent } from './components/stepper-item/stepper-item.component';
import { StepComponent } from './components/step/step.component';
import { StepperFooterComponent } from './components/stepper-footer/stepper-footer.component';
import { StepperComponent } from './components/stepper/stepper.component';



@NgModule({
  declarations: [
    StepperHeaderComponent,
    StepperItemComponent,
    StepComponent,
    StepperFooterComponent,
    StepperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StepperHeaderComponent,
    StepperItemComponent,
    StepComponent,
    StepperFooterComponent,
    StepperComponent]
})
export class StepperModule { }
