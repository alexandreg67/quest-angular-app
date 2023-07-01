import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class HerosBorderCardDirective {

  private initialColor:string ='#f5f5f5';
  private defaultColor:string = '#002563';
  private defautHeight:number = 180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defautHeight);
    this.setBorder(this.initialColor);
  }

  @Input('appBorderCard') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor)
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`
  } 
  private setBorder(color: string) {
    this.el.nativeElement.style.border = 'solid 4px' + color;
  }
}
