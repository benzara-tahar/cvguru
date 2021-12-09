import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss'],
})
export class CvBuilderComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastName: new FormControl(''),
  });
  constructor() {}

  ngOnInit(): void {}

  validateOnNext(event: any) {}
  
  validateStep(){


  }
}
