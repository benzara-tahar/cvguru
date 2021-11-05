import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dark-theme-toggle',
  templateUrl: './dark-theme-toggle.component.html',
  styleUrls: ['./dark-theme-toggle.component.scss'],
})
export class DarkThemeToggleComponent implements OnInit {
  theme: 'light' | 'dark' = 'light';
  constructor() {}

  ngOnInit(): void {
    this.theme = localStorage.theme || 'light';
    this.setUserTheme();
  }
  setUserTheme() {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      this.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      this.theme = 'light';
    }
  }

  toggleDarkTheme() {
    if (this.theme === 'light') {
      localStorage.setItem('theme', 'dark');
      document.body.classList.add('dark');
      this.theme = 'dark';
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      this.theme = 'light';
    }
  }
}
