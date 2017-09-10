import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdButtonModule, MdButtonToggleModule, MdMenuModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MobileNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
