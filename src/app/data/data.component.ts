import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  distance = '';
  age = '';
  baggage = '';

  constructor() {

  }

  getDistance(value: string) {
    this.distance = value;
  }

  getAge(value: string) {
    this.age = value;
  }

  getBaggage(value: string) {
    this.baggage = value;
  }



}
