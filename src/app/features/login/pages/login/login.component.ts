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

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

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
        if (result.user == null) {
          console.log('login error', result);
          this.firebaseErrorMessage = 'something wrong';
          return;
        }

        console.log('logging in...');
        this.router.navigate(['/']); // when the user is logged in, navigate them to dashboard
      })
      .catch((error) => {
        console.log('login error', error);
      });
  }

  async signInWithGoogle() {
    await this.authService
      .loginWithGoogle()
      .then((result) => {
        console.log(result);
        if (result.user) {
          // null is success, false means there was an error
          console.log('logging in...');
          this.router.navigate(['/']); // when the user is logged in, navigate them to dashboard
        } else if (result.user == null) {
          console.log('login error', result);
          this.firebaseErrorMessage = 'something wrong';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
