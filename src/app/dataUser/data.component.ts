import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DataForm } from '../models/dataform';
import { AeroflotEconomy } from '../servises/aeroflot/economy.service';
import { AeroflotHigh } from '../servises/aeroflot/high.service';
import { AeroflotLux } from '../servises/aeroflot/lux.service';
import { RgdEconomy } from '../servises/rgd/economy.service'
import { RgdHigh } from '../servises/rgd/high.service';
import { RgdLux } from '../servises/rgd/lux.service';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {

  dataUser: DataForm = {
    distance: '',
    age: '',
    baggage: ''
  }

  constructor(
    private aeroEconomy: AeroflotEconomy,
    private aeroHigh: AeroflotHigh,
    private aeroLux: AeroflotLux,
    private rgdEconomy: RgdEconomy,
    private rgdHigh: RgdHigh,
    private rgdLux: RgdLux) {

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

  sendData() {
    this.aeroEconomy.sendData(this.dataUser);
    this.aeroHigh.sendData(this.dataUser);
    this.aeroLux.sendData(this.dataUser);
    this.rgdEconomy.sendData(this.dataUser);
    this.rgdHigh.sendData(this.dataUser);
    this.rgdLux.sendData(this.dataUser);
    console.log('Data' + this.dataUser);
  }

}
