import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvBuilderComponent } from './pages/cv-builder.component/cv-builder.component';

const routes: Routes = [{ path: '', component: CvBuilderComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvBuilderRoutingModule {}
