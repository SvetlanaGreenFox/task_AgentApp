import { Injectable } from '@angular/core';
import { DataForm } from '../../models/dataform';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RgdLux {

  dataSource = new BehaviorSubject<DataForm>({
    distance: '',
    age: '',
    baggage: '',
  });
  data$: Observable<any> = this.dataSource
    .asObservable()
    .pipe(map(this.makeCalculations));

  sendData(data: DataForm): void {
    this.dataSource.next(data);
  }

  makeCalculations(data: DataForm) {
    const distance = Number(data.distance);
    const baggage = Number(data.baggage);
    const age = Number(data.age);
    const countKm = 4;
    const countBaggage = 50;

    if (baggage > 60) {
      return;
    }

    let price = distance * countKm;

    if (age < 16) {
      price *= (1 - 20 / 100);
    }

    return Math.round(price);
  }
}
