import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepDef } from '../stepper/stepper.component';
import { StepperService } from '../../stepper.service';

@Component({
  selector: 'app-stepper-header',
  templateUrl: './stepper-header.component.html',
  styleUrls: ['./stepper-header.component.scss']
})
export class StepperHeaderComponent implements OnInit {
  currentStep: number = 0;
  subscription: Subscription;

  @Input() items !:StepDef[]

  constructor(private stepperService: StepperService) {
    this.subscription = this.stepperService.onChange().subscribe((value) => {
      this.currentStep = value;
    });
  }
  ngOnInit(): void {
    
  }
  ngOnDestroy() {
    // Unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
  }

}  

