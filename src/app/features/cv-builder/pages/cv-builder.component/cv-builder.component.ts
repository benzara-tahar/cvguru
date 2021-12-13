import { Component, OnInit, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss'],
})
export class CvBuilderComponent implements OnInit, AfterViewInit {

  @ViewChildren(FormGroup) forms!: QueryList<FormGroup>;
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
    let form = this.forms.toArray();
    return form[stepNum].valid
  }
}
