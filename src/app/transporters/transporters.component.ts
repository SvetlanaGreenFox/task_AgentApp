import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  dataUser: Data[] = [];
}
