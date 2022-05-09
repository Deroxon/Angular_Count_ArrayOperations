import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[randColor]',
})
export class RandColorDirective implements OnInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    let rand: any = ['#'];

    for (let i = 0; i < 6; i++) {
      rand.push(Math.floor(Math.random() * 9));
    }
    rand = rand.map(String).join('');

    let li = this.el.nativeElement;
    this.renderer.setStyle(li, 'color', rand);
  }
}
