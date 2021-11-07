import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spacer',
  templateUrl: './spacer.component.html',
  styleUrls: ['./spacer.component.scss'],
})
export class SpacerComponent implements OnInit {
  @Input() type: 'blob-scene' | 'layered-peaks' | 'layered-waves' | 'wave' =
    'wave';
  @Input() flip: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
