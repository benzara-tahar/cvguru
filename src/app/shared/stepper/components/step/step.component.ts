import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent implements OnInit {
  constructor(private ref: ElementRef) {}
  @Input() title!: string;
  @Input() icon!: string;
  ngOnInit(): void {}

  show() {
    this.ref.nativeElement.style.display = 'block';
  }

  hide() {
    this.ref.nativeElement.style.display = 'none';
  }
}
