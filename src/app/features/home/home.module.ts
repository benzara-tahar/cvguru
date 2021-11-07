import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home.component/home.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, FeaturesComponent, TestimonialsComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
