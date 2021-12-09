import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CvBuilderRoutingModule } from './cv-builder-routing.module';
import { CvBuilderComponent } from './pages/cv-builder.component/cv-builder.component';
import { StepperModule } from '../../shared/stepper/stepper.module';

@NgModule({
  declarations: [CvBuilderComponent],
  imports: [CommonModule, CvBuilderRoutingModule, StepperModule,ReactiveFormsModule],
})
export class CvBuilderModule {}
