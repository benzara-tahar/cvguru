import { Component, Input, OnInit } from '@angular/core';
import { User } from '@firebase/auth';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
})
export class UserMenuComponent implements OnInit {
  @Input() user: User | undefined;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {}
  logout() {
    this.auth.logout();
  }
}
