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
import { ShortFilmsComponent } from './short-films/short-films.component';
import { MusicVideosComponent } from './music-videos/music-videos.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MobileNavComponent,
    FullscreenVideoComponent,
    HomeComponent,
    HomeContentComponent,
    FeatureFilmsComponent,
    ShortFilmsComponent,
    MusicVideosComponent,
    BioComponent,
    ContactComponent,
    FooterComponent
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
