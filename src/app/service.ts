import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Dog } from './model/dog';

@Injectable()
export class Service {
  total: number = 0;
  DogList: Array<Dog> = [];

  total$ = new BehaviorSubject<number>(0);
  DogList$ = new Subject<Array<Dog>>();

  addTotal() {
    this.total++;
    this.total$.next(this.total);
  }

  minusTotal(value) {
    this.total -= value;
    this.total$.next(this.total);
  }

  addDog(value) {
    this.DogList.push(value);
    this.DogList$.next(this.DogList);
  }

  deleteDog(value) {
    if (value) {
      let check = this.DogList.find((x) => x.name === value);
      if (check) {
        this.DogList = this.DogList.filter((x) => x.name !== value);
        this.DogList$.next(this.DogList);
        console.log('working');
      } else {
        alert('there is no dog with such a name like that');
      }
    } else {
      alert('enter name of dog!');
    }
  }

  subDog$(): Observable<Array<Dog>> {
    return this.DogList$.asObservable();
  }
  subTotal$(): Observable<number> {
    return this.total$.asObservable();
  }
}
