import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {
  constructor(private ref: ElementRef) {}

  ngOnInit(): void {}

  show() {
    this.ref.nativeElement.style.display = 'block';
  }

  hide() {
    this.ref.nativeElement.style.display = 'none';
  }
}
