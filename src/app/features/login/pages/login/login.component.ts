import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {}

  loginUser() {
    if (this.loginForm.invalid) return;

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    this.authService
      .loginWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        if (result == null) {
          // null is success, false means there was an error
          console.log('logging in...');
          this.router.navigate(['/dashboard']); // when the user is logged in, navigate them to dashboard
        } else if (result.user == null) {
          console.log('login error', result);
          this.firebaseErrorMessage = 'something wrong';
        }
      });
  }

  async signInWithGoogle() {
    await this.authService.loginWithGoogle().then((result) => {
      console.log(result);
      if (result == null) {
        // null is success, false means there was an error
        console.log('logging in...');
        this.router.navigate(['/dashboard']); // when the user is logged in, navigate them to dashboard
      } else if (result.user == null) {
        console.log('login error', result);
        this.firebaseErrorMessage = 'something wrong';
      }
    });
  }
}
