import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { ButtonComponent } from './button/button.component';
import { TransportersComponent } from './transporters/transporters.component';
import { DatauserComponent } from './datauser/datauser.component';

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ButtonComponent,
    TransportersComponent,
    DatauserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
