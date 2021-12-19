import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './dataUser/data.component';
import { TransportersComponent } from './transporters/transporters.component';
import { AeroflotEconomy } from './servises/aeroflot/economy.service';
import { AeroflotHigh } from './servises/aeroflot/high.service';
import { AeroflotLux } from './servises/aeroflot/lux.service';


@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    TransportersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AeroflotEconomy, AeroflotHigh, AeroflotLux],
  bootstrap: [AppComponent]
})
export class AppModule { }
