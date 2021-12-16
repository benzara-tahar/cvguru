import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss'],
})
export class CvBuilderComponent implements OnInit {

  profileForm: FormGroup= new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
  })

  constructor() {}

  ngOnInit(): void {}

  
  validateStep=(stepNum: number)=>{
    switch (stepNum){
      case 0:
        this.profileForm.markAllAsTouched()
        return (this.profileForm.valid);
      case 1:
        return true;
      case 3:
        return false;
        default: return false
    }
  }
}
