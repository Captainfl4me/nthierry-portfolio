import { animate, style, transition, trigger } from '@angular/animations';
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
    trigger('slideFadeFromBottom', [
      transition(':enter', [
        style({ opacity: '0', transform: 'translateY(100%)' }),  // initial
        animate('1s ease', style({ opacity: '1', transform: 'translateY(0)' }))  // final
      ]),
      transition(':leave', [
        style({ opacity: '1', transform: 'translateY(0)' }),  // initial
        animate('1s ease', style({ opacity: '0', transform: 'translateY(100%)' }))  // final
      ])
    ])
  ]
})
export class HomeComponent {
    // name split into two lines ("Nicolas" / "THIERRY"), each line into letters
    // for the kinetic entrance; offset keeps the stagger continuous across lines
    readonly nameLines = this.buildNameLines();

    private buildNameLines(): { letters: string[]; offset: number }[] {
        let offset = 0;
        return ['Nicolas', 'THIERRY'].map(word => {
            const letters = word.split('');
            const line = { letters, offset };
            offset += letters.length;
            return line;
        });
    }

    readonly marqueeItems = [
        'Systèmes embarqués', 'C / C++', 'Python', 'ROS 2', 'Assembleur 6502',
        'HTTP', 'CAO', 'Impression 3D', 'Git', 'Aérospatial'
    ];

    openLink(link: string) {
        window.open(link, '_blank', 'noopener');
    }
}
