import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss'],
  animations: [
    trigger('slideFadeFromBottom', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(100%)' }),  // initial
        animate('0.75s ease', style({ opacity: '1', transform: 'translateX(0)' }))  // final
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateX(0)' }),  // initial
        animate('0.75s ease', style({ opacity: '0', transform: 'translateX(100%)' }))  // final
      ])
    ])
  ]
})
export class CvComponent {

}
