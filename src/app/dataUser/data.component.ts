import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  dataUser: DataService = {
    distance: '',
    age: '',
    baggage: ''
  }

  constructor() {

  }

  getDistance(value: string) {
    this.dataUser.distance = value;
  }

  getAge(value: string) {
    this.dataUser.age = value;
  }

  getBaggage(value: string) {
    this.dataUser.baggage = value;
  }



}
