import { Component } from '@angular/core';
import { Service } from './service';
import { Dog } from './model/dog';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  count: number = 0;
  dogList = [];
  constructor(private service: Service) {}

  ngOnInit() {
    this.service.subTotal$().subscribe((data) => {
      this.count = data;
    });

    this.service.subDog$().subscribe((data) => {
      this.dogList = data;
    });
  }
}
