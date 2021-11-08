import { Component, OnInit } from '@angular/core';
import { User } from '@firebase/auth';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  user$: Observable<User | null> = this.auth.user$;

  mobileNavVisisble: boolean = false;
  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.user$.pipe(tap((user) => console.log('NAVBAR', user))).subscribe();
  }
}
