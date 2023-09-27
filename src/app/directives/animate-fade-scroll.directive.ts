import { animate, AnimationBuilder, AnimationMetadata, AnimationPlayer, style } from '@angular/animations';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAnimateFadeScroll]'
})
export class AnimateFadeScrollDirective {
  player: AnimationPlayer = this.builder.build(this.fadeInFromBottom()).create(this.el.nativeElement);;

  isAlreadyInView: boolean = false;

  constructor(private builder: AnimationBuilder, private el: ElementRef) {
    const element = this.el.nativeElement as HTMLElement;
    element.classList.add('animateFadeIn');

    setInterval(() => {
      this.checkScroll();
    }, 10);
  }

  private checkScroll() {
    if (!this.isAlreadyInView && this.isInViewFromTop() && !this.isOutOfView()) {
      if(this.player) this.player.destroy();
      this.isAlreadyInView = true;

      const factory = this.builder.build(this.fadeInFromBottom());
      this.player = factory.create(this.el.nativeElement);

      this.player.play();
    }
  }

  private fadeInFromBottom(): AnimationMetadata[] {
    return [
      style({ opacity: 0, transform: 'translateY(100px)' }),
      animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ];
  }

  private isOutOfView(): boolean {
    const nativeElement = this.el.nativeElement as HTMLElement;
    return window.innerHeight <= nativeElement.getBoundingClientRect().top || nativeElement.getBoundingClientRect().bottom <= 0;
  }

  private isInViewFromTop(): boolean {
    const nativeElement = this.el.nativeElement as HTMLElement;
    return window.innerHeight > nativeElement.getBoundingClientRect().top && nativeElement.getBoundingClientRect().top > 0;
  }
}