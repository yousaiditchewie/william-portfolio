import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MdCardModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdMenuModule,
  MdGridListModule } from '@angular/material';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { FullscreenVideoComponent } from './fullscreen-video/fullscreen-video.component';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { FeatureFilmsComponent } from './feature-films/feature-films.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MobileNavComponent,
    FullscreenVideoComponent,
    HomeComponent,
    HomeContentComponent,
    FeatureFilmsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdCardModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdMenuModule,
    MdGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
