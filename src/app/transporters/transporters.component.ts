import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AeroflotEconomy } from '../servises/aeroflot/economy.service';
import { AeroflotHigh } from '../servises/aeroflot/high.service';
import { AeroflotLux } from '../servises/aeroflot/lux.service';
import { RgdEconomy } from '../servises/rgd/economy.service';
import { RgdHigh } from '../servises/rgd/high.service';
import { RgdLux } from '../servises/rgd/lux.service';

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

  aeroflotEconom: number = 0;
  aeroflotHigh: number = 0;
  aeroflotLux: number = 0;
  rgdClassEconomy: number = 0;
  rgdClassHigh: number = 0;
  rgdClassLux: number = 0;

  private isDestroyed$: Subject<void> = new Subject();

  constructor(
    private aeroEconomy: AeroflotEconomy,
    private aeroHigh: AeroflotHigh,
    private aeroLux: AeroflotLux,
    private rgdEconomy: RgdEconomy,
    private rgdHigh: RgdHigh,
    private rgdLux: RgdLux) { }

  ngOnInit(): void {
    this.aeroEconomy.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number) => {
        this.aeroflotEconom = data;
        console.log(this.aeroflotEconom);
      });
    this.aeroHigh.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number) => {
        console.log(data);
        this.aeroflotHigh = data;
        console.log(this.aeroflotHigh)
      });
    this.aeroLux.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number) => {
        console.log(data);
        this.aeroflotLux = data;
        console.log(this.aeroflotLux);
      });
    this.rgdEconomy.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number) => {
        console.log(data);
        this.rgdClassEconomy = data;
      });
    this.rgdHigh.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number) => {
        console.log(data);
        this.rgdClassHigh = data;
      });
    this.rgdLux.data$
      .pipe(takeUntil(this.isDestroyed$))
      .subscribe((data: number) => {
        console.log(data);
        this.rgdClassLux = data;
      })
  }

  ngOnDestroy(): void {
    this.isDestroyed$.next();
    this.isDestroyed$.complete();
  }
}
