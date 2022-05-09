import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'second-component',
  templateUrl: './second.component.html',
})
export class SecondComponent {
  counter: number = 0;
  toMinus: number = 0;

  constructor(private service: Service) {}

  add() {
    this.counter++;
    this.service.addTotal();
  }

  minus() {
    this.counter -= this.toMinus;
    this.service.minusTotal(this.toMinus);
    console.log(this.toMinus);
  }
}
