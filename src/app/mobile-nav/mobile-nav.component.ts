import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mobile-nav',
  templateUrl: './mobile-nav.component.html',
  styleUrls: ['./mobile-nav.component.css']
})
export class MobileNavComponent implements OnInit {
  menuIcon = 'menu';
  links = [
    {
      name: 'FEATURE FILMS',
      href: '#',
      target: ''
    },
    {
      name: 'SHORT FILMS',
      href: '#',
      target: ''
    },
    {
      name: 'MUSIC VIDEOS',
      href: '#',
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
  toggleMenuIcon() {
    return this.menuIcon === 'menu' ? this.menuIcon = 'close' : this.menuIcon = 'menu';
  }
}


