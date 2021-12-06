import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  private currentStep: number = 0;
  private subject = new Subject<any>();

  constructor() {}

  nextStep() {
    this.currentStep += 1;
    this.subject.next(this.currentStep);
  }

  previousStep() {
    this.currentStep -= 1;
    this.subject.next(this.currentStep);
  }

  onChange(): Observable<any> {
    return this.subject.asObservable();
  }
}
