import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fadeSlideDown', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(-16px)' }),  // initial
        animate('0.5s ease-out', style({ opacity: '1', transform: 'none' }))  // final
      ])
    ]),
    trigger('cardStagger', [
      transition(':enter', [
        query(':enter', [
          style({ opacity: '0', transform: 'translateY(28px) scale(0.98)' }),  // initial
          stagger(110, animate('0.55s cubic-bezier(0.2, 0.7, 0.3, 1)', style({ opacity: '1', transform: 'none' })))  // final
        ], { optional: true })
      ])
    ])
  ]
})
export class PortfolioComponent {

}
