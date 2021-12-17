import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './dataUser/data.component';
import { ButtonComponent } from './button/button.component';
import { TransportersComponent } from './transporters/transporters.component';
import { DataService } from './data/data.service';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ButtonComponent,
    TransportersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
