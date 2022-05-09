import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'first-component',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  counter: number = 0;

  constructor(private service: Service) {}

  add() {
    this.counter++;
    this.service.addTotal();
  }
}
