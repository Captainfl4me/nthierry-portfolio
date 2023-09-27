import { style, transition, trigger, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideFadeFromLeft', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateX(-250px)' }),  // initial
        animate('1s ease', style({ opacity: '1', transform: 'translateX(0)' }))  // final
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateX(0)' }),  // initial
        animate('1s ease', style({ opacity: '0', transform: 'translateX(-250px)' }))  // final
      ])
    ]),
    trigger('slideFadeFromRight', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateX(250px)' }),  // initial
        animate('1s ease', style({ opacity: '1', transform: 'translateX(0)' }))  // final
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateX(0)' }),  // initial
        animate('1s ease', style({ opacity: '0', transform: 'translateX(250px)' }))  // final
      ])
    ]),
    trigger('slideFadeFromBottom', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(100%)' }),  // initial
        animate('1s ease', style({ opacity: '1', transform: 'translateX(0)' }))  // final
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateX(0)' }),  // initial
        animate('1s ease', style({ opacity: '0', transform: 'translateX(100%)' }))  // final
      ])
    ])
  ]
})
export class HomeComponent {

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
