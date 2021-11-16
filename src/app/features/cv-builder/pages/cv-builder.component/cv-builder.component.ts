import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv-builder',
  templateUrl: './cv-builder.component.html',
  styleUrls: ['./cv-builder.component.scss']
})
export class CvBuilderComponent implements OnInit {
  items :any []=[{text:"Personal"},{text:"Exprience"},{text:"Template"}]

  constructor() { }

  ngOnInit(): void {
  }

}
