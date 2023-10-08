import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-flfc',
  templateUrl: './flfc.component.html',
  styleUrls: ['./flfc.component.scss'],
  animations: [
    trigger('fade', [
        transition(':enter', [
          style({ opacity: '0' }),  // initial
          animate('0.5s ease', style({ opacity: '1' }))  // final
        ])
    ]),
    trigger('slideFadeFromBottom', [
        transition(':enter', [
          style({ opacity: '0', transform: 'translateY(100%)' }),  // initial
          animate('0.5s ease', style({ opacity: '1', transform: 'translateX(0)' }))  // final
        ])
      ])
  ]
})
export class FlfcComponent {

  constructor(private location: Location) {}

  async goBack() {
    this.location.back();
  }
}
