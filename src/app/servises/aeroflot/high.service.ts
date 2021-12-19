import { Injectable } from '@angular/core';
import { DataForm } from '../../models/dataform';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AeroflotHigh {

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
    const countKm = 8;
    const countBaggage = 5000;

    if (baggage >= 50) {
      return;
    }

    let price = distance * countKm;

    if (age < 7) {
      price *= (1 - 30 / 100);
    }

    if (baggage >= 20) {
      price += countBaggage;
      return price;
    }
    return price;
  }
}
