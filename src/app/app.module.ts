import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SetupmodalComponent } from './setupmodal/setupmodal.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatacardsComponent } from './datacards/datacards.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SetupmodalComponent,
    DatacardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule
  ],
  entryComponents: [
    SetupmodalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
