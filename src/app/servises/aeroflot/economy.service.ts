import { Injectable } from '@angular/core';
import { DataForm } from '../../models/dataform';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AeroflotEconomy {

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
    const countKm = 4;
    const countBaggage = 4000;

    if (baggage > 20) {
      return;
    }

    let price = distance * countKm;

    if (baggage >= 5) {
      price += countBaggage;
      return price;
    }
    return Math.round(price);
  }
}
