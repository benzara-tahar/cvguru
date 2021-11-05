import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DarkThemeToggleComponent } from './components/dark-theme-toggle/dark-theme-toggle.component';

const COMPONENTS = [NavbarComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS, DarkThemeToggleComponent],
  exports: [...COMPONENTS],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
