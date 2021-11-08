import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DarkThemeToggleComponent } from './components/dark-theme-toggle/dark-theme-toggle.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

const COMPONENTS = [
  NavbarComponent,
  FooterComponent,
  DarkThemeToggleComponent,
  SpacerComponent,
];

@NgModule({
  declarations: [...COMPONENTS, UserMenuComponent],
  exports: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
