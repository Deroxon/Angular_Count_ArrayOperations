import { Component } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'third-component',
  templateUrl: './third.component.html',
})
export class ThirdComponent {
  counter: number = 0;
  name: string;
  age: number;
  adopted: boolean;

  dogDelete: string;

  constructor(private service: Service) {}

  add() {
    this.counter++;
    this.service.addTotal();
  }

  addDog() {
    this.service.addDog({
      name: this.name,
      age: this.age,
      adopted: this.adopted,
    });
    this.name = '';
    this.age = 0;
    this.adopted = false;
  }

  deleteDog() {
    this.service.deleteDog(this.dogDelete);
    this.dogDelete = '';
  }
}
