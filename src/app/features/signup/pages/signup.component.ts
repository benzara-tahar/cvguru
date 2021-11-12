import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { sendEmailVerification } from '@firebase/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  firebaseErrorMessage: string;

  get firstname() {
    return this.signupForm.get('firstname');
  }
  get lastname() {
    return this.signupForm.get('lastname');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get password() {
    return this.signupForm.get('password');
  }

  constructor(private authService: AuthService, private router: Router) {
    this.signupForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {}

  registerUser() {
    if (this.signupForm.invalid) return;

    const firstname = this.signupForm.value.firstname;
    const lastname = this.signupForm.value.lastname;
    const email = this.signupForm.value.email;
    const password = this.signupForm.value.password;

    this.authService
      .register({ firstname, lastname, email, password })
      .then((result) => {
        console.log(result);
        if (result.user == null) {
          console.log('login error', result);
          this.firebaseErrorMessage = 'something wrong';
          return;
        }

        sendEmailVerification(result.user);
        console.log('logging in...');
        this.router.navigate(['/']); // when the user is logged in, navigate them to dashboard
      })
      .catch((error) => {
        console.log('login error', error);
      });
  }
}
