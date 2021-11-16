import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepperComponent } from './components/stepper/stepper.component';
import { StepperItemComponent } from './components/stepper-item/stepper-item.component';



@NgModule({
  declarations: [
    StepperComponent,
    StepperItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [StepperComponent,
    StepperItemComponent]
})
export class StepperModule { }
