import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvBuilderRoutingModule } from './cv-builder-routing.module';
import { CvBuilderComponent } from './pages/cv-builder.component/cv-builder.component';

@NgModule({
  declarations: [CvBuilderComponent],
  imports: [CommonModule, CvBuilderRoutingModule],
})
export class CvBuilderModule {}
