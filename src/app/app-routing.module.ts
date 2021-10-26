import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },

  // default layout
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./features/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  // connected user layout
  {
    path: 'app',
    component: UserLayoutComponent,
    children: [
      {
        path: 'cvBuilder',
        loadChildren: () =>
          import('./features/cv-builder/cv-builder.module').then(
            (m) => m.CvBuilderModule
          ),
      },
      {
        path: 'payment',
        loadChildren: () =>
          import('./features/payment/payment.module').then(
            (m) => m.PaymentModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
