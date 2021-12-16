import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  private currentStep: number = 0;
  private numSteps: number = 0;
  private subject = new Subject<any>();

  constructor() {}
  setNumberSteps(numSteps:number)
  {
      this.numSteps=numSteps
  }

  nextStep() {
    if (this.currentStep < this.numSteps-1){
      this.currentStep += 1;
    this.subject.next(this.currentStep);
    }
    
  }

  previousStep() {
    if(this.currentStep > 0)
    this.currentStep -= 1;
    this.subject.next(this.currentStep);
  }

  onChange(): Observable<any> {
    return this.subject.asObservable();
  }
}
