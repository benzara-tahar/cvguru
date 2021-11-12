import {
  Component,
  OnInit,
  OnDestroy,
  Optional,
  Injectable,
} from '@angular/core';
import {
  Auth,
  authState,
  signInAnonymously,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';
import { EMPTY, Observable, Subscription } from 'rxjs';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  TwitterAuthProvider,
} from '@firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public readonly user$: Observable<User | null> = EMPTY;

  constructor(@Optional() private auth: Auth, private router: Router) {
    if (auth) {
      this.user$ = authState(this.auth);
    }
  }

  async loginWithGoogle() {
    return await signInWithPopup(this.auth, new GoogleAuthProvider());
  }
  async loginWithFacebook() {
    return await signInWithPopup(this.auth, new FacebookAuthProvider());
  }
  async loginWithTwitter() {
    return await signInWithPopup(this.auth, new TwitterAuthProvider());
  }

  async loginWithEmailAndPassword(email: string, password: string) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async loginAnonymously() {
    return await signInAnonymously(this.auth);
  }

  async logout() {
    return await signOut(this.auth);
  }

  async register(user: any) {
    return await createUserWithEmailAndPassword(
      this.auth,
      user.email,
      user.password
    );
  }
}
