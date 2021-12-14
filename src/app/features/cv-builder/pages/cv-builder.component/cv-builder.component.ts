import { Component, OnInit,ContentChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss'],
})
export class CvBuilderComponent implements OnInit, AfterViewInit {

  @ContentChildren("form") forms!: QueryList<any>;
  profileForm!: FormGroup;
 
  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }
  ngAfterViewInit(){}
  validateOnNext(event: any) {}
  
  valideStep(stepNum: number):boolean{
    switch (stepNum){
      case 0:
        return this.profileForm.valid;
      case 1:
        return true;
      case 3:
        return false;
        default: return false
    }
      

  }
}
