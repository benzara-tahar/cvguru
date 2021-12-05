import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss']
})
export class CvBuilderComponent implements OnInit {
  items :any []=[{text:"Personal",active:true},{text:"Exprience",active:false},{text:"Template",active:false}]

  constructor() { }

  ngOnInit(): void {
  }
  validateOnNext(event: any) {
      
  }
}
