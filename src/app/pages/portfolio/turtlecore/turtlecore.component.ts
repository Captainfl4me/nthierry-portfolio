import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-turtlecore',
  templateUrl: './turtlecore.component.html',
  styleUrls: ['./turtlecore.component.scss'],
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
          animate('0.5s ease', style({ opacity: '1', transform: 'translateY(0)' }))  // final
        ])
      ])
  ]
})
export class TurtlecoreComponent {

  constructor(private location: Location) {}

  goBack() {
    this.location.back();
  }

  open(url: string) {
    window.open(url, "_blank", "noopener");
  }
}
