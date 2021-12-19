import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AeroflotEconomy } from '../servises/aeroflot/economy.service';
import { AeroflotHigh } from '../servises/aeroflot/high.service';
import { AeroflotLux } from '../servises/aeroflot/lux.service';

export interface Data {
  distance: number;
  age: number;
  baggage: number;
}


@Component({
  selector: 'app-transporters',
  templateUrl: './transporters.component.html',
  styleUrls: ['./transporters.component.css']
})
export class TransportersComponent implements OnInit {

  aeroflotEconom!: number | null;
  aeroflotHigh!: number | null;
  aeroflotLux!: number | null;

  private isDestroyed$: Subject<void> = new Subject();

  constructor(
    private aeroEconomy: AeroflotEconomy,
    private aeroHigh: AeroflotHigh,
    private aeroLux: AeroflotLux) { }

  ngOnInit(): void {
    this.aeroEconomy.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number | null) => {
        this.aeroflotEconom = data;
        console.log(this.aeroflotEconom);
      });
    this.aeroHigh.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number | null) => {
        console.log(data);
        this.aeroflotHigh = data;
        console.log(this.aeroflotHigh)
      });
    this.aeroLux.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number | null) => {
        console.log(data);
        this.aeroflotLux = data;
        console.log(this.aeroflotLux);
      })
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next();
    this.isDestroyed$.complete();
  }


}
