import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  links = [
    {
      name: 'FEATURE FILMS',
      href: '#feature-films',
      target: ''
    },
    {
      name: 'SHORT FILMS',
      href: '#short-films',
      target: ''
    },
    {
      name: 'MUSIC VIDEOS',
      href: '#music-videos',
      target: ''
    },
    {
      name: 'BIO',
      href: '#',
      target: ''
    },
    {
      name: 'CONTACT',
      href: '#',
      target: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
