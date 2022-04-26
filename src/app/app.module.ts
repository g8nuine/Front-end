import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {DataService} from "./data.service";
import {MatDialogModule} from '@angular/material/dialog';
// import { PopUpListComponent } from './';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    // PopUpListComponent
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
