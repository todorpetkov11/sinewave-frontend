import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appImageSlide]'
})
export class ImageSlideDirective {

  constructor(private el: ElementRef) {
  }

  @Input() imageIndex = 0

  private changeSlide(color: string) {
    if (this.el.nativeElement.picIndex == this.imageIndex) {
      this.el.nativeElement.display = 'block'
    }
  }
}
